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

CREATE TABLE IF NOT EXISTS "notification" (
    "notificationid" UUID NOT NULL UNIQUE,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "notification_type" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL,
    "notifierid" UUID REFERENCES "appuser" ("appuserid") ON DELETE
    SET
        NULL ON UPDATE CASCADE,
        "actorid" UUID REFERENCES "appuser" ("appuserid") ON DELETE
    SET
        NULL ON UPDATE CASCADE,
        PRIMARY KEY ("notificationid")
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO
    AppUser(appuserId, first_name, last_name, email)
VALUES
    (
        uuid_generate_v4(),
        'Jesus',
        'Gutierrez',
        'jesus.gutierrez@nowhere.com'
    ),
    (
        uuid_generate_v4(),
        'John',
        'Deere',
        'john.deere@nowhere.com'
    ),
    (
        uuid_generate_v4(),
        'James',
        'McAvoy',
        'james.mcavoy@nowhere.com'
    ),
    (
        uuid_generate_v4(),
        'Sarah',
        'James',
        'sarah.james@nowhere.com'
    );
