-- KGH Hotel Portfolio – Supabase Schema
-- Run this in your Supabase SQL editor to set up the database.

create table if not exists hotels (
  id            text primary key,
  name          text not null,
  city          text not null,
  country       text not null check (country in ('Thailand', 'Philippines')),
  brand         text not null check (brand in ('Kokotel', 'Independent')),
  location_type text not null check (location_type in ('beach', 'city', 'resort', 'highland')),
  website       text not null default '',
  facebook      text not null default '',
  status        text not null check (status in ('open', 'coming_soon')),
  visible       boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists hotels_updated_at on hotels;
create trigger hotels_updated_at
  before update on hotels
  for each row execute function set_updated_at();

-- Row-level security (public read, no public write)
alter table hotels enable row level security;
create policy "Public read visible hotels" on hotels for select using (visible = true);
