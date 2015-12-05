use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :ember_blog, EmberBlog.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :ember_blog, EmberBlog.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "ember_blog_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox