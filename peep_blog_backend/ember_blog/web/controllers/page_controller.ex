defmodule EmberBlog.PageController do
  use EmberBlog.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
