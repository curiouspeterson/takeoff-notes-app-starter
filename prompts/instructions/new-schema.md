# New Schema Instructions

Use this guide to create a new schema in the project.

Write the complete code for every step. Do not be lazy. Write everything that is needed.

Your goal is to completely finish whatever the user asks for.   

## Steps

1. Create a new schema file in `/db/schema` like `example-schema.ts`
2. Export any new schema in `/db/schema/index.ts` like `index.ts`
3. Add the new schema to the db in `/db/db.ts`
4. Add the queries for the new schema in `/db/queries/index.ts` like `example-queries.ts`
5. Add the actions for the new schema in `/actions/index.ts` like `example-actions.ts`
6. Generate the new schema with `db:generate`
7. Migrate the new schema with `db:migrate`

## Requirements

- for revalidatePath just use `revalidatePath("/")`
- in schemas for userId use `text("user_id").notNull()`, no need to reference another table
