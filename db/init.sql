CREATE DATABASE notificationsapp;

\c notificationsapp;

CREATE TABLE AppUser(
    appuserId UUID NOT NULL UNIQUE,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(320) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO
    AppUser(appuserId, first_name, last_name, email)
VALUES
    (
        uuid_generate_v4(),
        'Jesus',
        'Gutierrez',
        'jesus.gutierrez@resilia.com'
    ),
    (
        uuid_generate_v4(),
        'Jenn',
        'Everhart',
        'jenn.everhart@resilia.com'
    ),
    (
        uuid_generate_v4(),
        'MB',
        'Mcormick',
        'mb.mcormick@resilia.com'
    );