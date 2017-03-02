activate :blog do |blog|
  blog.name = "work"

  blog.prefix = "work"

  blog.permalink = "{year}/{month}/{day}/{title}.html"

  blog.taglink = "tags/{tag}.html"
  blog.layout = "post"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250

  blog.default_extension = ".md"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

Time.zone = "Melbourne"

page "/feed.xml", layout: false

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions']
end

activate :automatic_image_sizes
# activate :livereload
activate :directory_indexes
activate :bootstrap_navbar

activate :sprockets
sprockets.append_path File.join(root, "source/javascripts'")

set :relative_links, true
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'


helpers do
  def nav_active(path)
    current_page.path == path ? {:class => "active"} : {}
  end
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :asset_hash
  # activate :imageoptim
  activate :minify_html
  activate :gzip
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'gh-pages'
  deploy.build_before = true
end
