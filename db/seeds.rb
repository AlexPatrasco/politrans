# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AboutSection.destroy_all
ProductCategory.destroy_all
Product.destroy_all
News.destroy_all
Promotion.destroy_all


AboutSection.create(
  title: "Our History",
  order: 0,
  visible: true,
  body: %Q(
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim blandit nulla, non mattis neque commodo nec. In id nulla vulputate ex varius pharetra quis et mauris. Duis scelerisque tincidunt lobortis. Vivamus blandit est id fringilla hendrerit. Quisque a libero ligula. Ut faucibus leo in felis iaculis auctor. Quisque tempus purus in nulla congue, sed vulputate nulla interdum.
    Curabitur in tortor at justo tempus dapibus. Ut at nisl malesuada nisl cursus posuere. Aliquam commodo condimentum urna id dapibus. Praesent vulputate aliquet orci sed interdum. Quisque porta fermentum condimentum. Ut sed blandit purus, sit amet tempor neque. Cras pharetra ex sapien, eget euismod sapien posuere ultrices. Phasellus ullamcorper interdum vestibulum. Proin faucibus et mauris a interdum. Vivamus sit amet aliquam felis. Vestibulum libero dolor, ornare ut efficitur sed, rutrum ut dolor. Suspendisse potenti. Duis fermentum ac leo congue imperdiet. Fusce vitae ultricies velit. Fusce dictum in magna ac pretium. Aenean urna mauris, pretium sit amet porta ac, tempus eu justo."
  )
)

AboutSection.create(
  title: "What we do best",
  order: 1,
  visible: true,
  body: %Q(
    Nulla at massa semper, posuere leo quis, maximus quam. Maecenas mattis, ligula vitae dictum tempus, ante massa porttitor libero, nec pellentesque nulla nibh nec tortor. In a nisi non magna porttitor pulvinar. Nulla euismod nec mi quis vulputate. Praesent maximus tempus eleifend. In venenatis, mauris pretium euismod sollicitudin, lacus magna auctor sem, non finibus justo neque at purus. Praesent quis tellus malesuada, consequat risus sed, tristique erat.
    Integer sed nibh sapien. Ut eu mauris rutrum, consequat tortor at, dignissim nibh. In cursus dui leo, ac tristique augue facilisis sit amet. Nulla ut viverra ex. Suspendisse egestas et eros quis ultricies. Mauris ac sapien eget velit finibus pretium. Morbi dictum, mauris pretium bibendum venenatis, metus nibh scelerisque tellus, at mollis nisl justo nec ipsum.
  )
)

car = ProductCategory.create(
  name: "Car",
  order: 1,
  visible: true
)

truck = ProductCategory.create(
  name: "Truck",
  order: 2,
  visible: true
)

van = ProductCategory.create(
  name: "Van",
  order: 3,
  visible: true
)

car.products.create(
  name: "Suspension",
  order: 1,
  description: "All about car suspension.",
  visible: true
)

car.products.create(
  name: "Steering",
  order: 2,
  description: "All about car steering.",
  visible: true
)

car.products.create(
  name: "Engine",
  order: 3,
  description: "All about car engines.",
  visible: true
)

truck.products.create(
  name: "Steering",
  order: 1,
  description: "All about truck steering.",
  visible: true
)

News.create(
  visible: true,
  image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-4hRzR2xBD3DMcMz8lYzkeBtd8LpI8SfocEGmIoo87s4SPhFk",
  title: "Save a ton of money with us",
  contents: "We are offering the best <strong>quality</strong> products for the <strong>lowest</strong> prices in the known <i>UNIVERSE</i>! <br/> <p>Nulla at massa semper, posuere leo quis, maximus quam. Maecenas mattis, ligula vitae dictum tempus, ante massa porttitor libero, nec pellentesque nulla nibh nec tortor. In a nisi non magna porttitor pulvinar. Nulla euismod nec mi quis vulputate. Praesent maximus tempus eleifend. In venenatis, mauris pretium euismod sollicitudin, lacus magna auctor sem, non finibus justo neque at purus. Praesent quis tellus malesuada, consequat risus sed, tristique erat.
    Integer sed nibh sapien. Ut eu mauris rutrum, consequat tortor at, dignissim nibh. In cursus dui leo, ac tristique augue facilisis sit amet. Nulla ut viverra ex.</p>"
)

Promotion.create(
  title: "Christmas SALE",
  visible: true,
  starts_at: Date.new(2019, 12, 15),
  ends_at: Date.new(2020, 1, 3),
  description: "<h3> Save a lot during this Christmas!</h3><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim blandit nulla, non mattis neque commodo nec. In id nulla vulputate ex varius pharetra quis et mauris. Duis scelerisque tincidunt lobortis. Vivamus blandit est id fringilla hendrerit. Quisque a libero ligula. Ut faucibus leo in felis iaculis auctor. Quisque tempus purus in nulla congue, sed vulputate nulla interdum.
    Curabitur in tortor at justo tempus dapibus. Ut at nisl malesuada nisl cursus posuere. Aliquam commodo condimentum urna id dapibus.</p>",
  image_link: "https://timedotcom.files.wordpress.com/2019/06/what-is-half-christmas-workaholics.jpg",
)

Promotion.create(
  title: "Past deals",
  visible: true,
  starts_at: 1.month.ago,
  ends_at: 10.days.ago,
  description: "<h3> A bit too late =(</h3><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim blandit nulla, non mattis neque commodo nec. In id nulla vulputate ex varius pharetra quis et mauris. Duis scelerisque tincidunt lobortis. Vivamus blandit est id fringilla hendrerit. Quisque a libero ligula. Ut faucibus leo in felis iaculis auctor. Quisque tempus purus in nulla congue, sed vulputate nulla interdum.
    Curabitur in tortor at justo tempus dapibus. Ut at nisl malesuada nisl cursus posuere. Aliquam commodo condimentum urna id dapibus.</p>",
  image_link: "https://stayuplate.org/wp-content/uploads/2018/05/logo.png",
)

Promotion.create(
  title: "Current deal",
  visible: true,
  starts_at: 1.month.ago,
  ends_at: 1.month.from_now,
  description: "<h3> Don't miss it!</h3><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim blandit nulla, non mattis neque commodo nec. In id nulla vulputate ex varius pharetra quis et mauris. Duis scelerisque tincidunt lobortis. Vivamus blandit est id fringilla hendrerit. Quisque a libero ligula. Ut faucibus leo in felis iaculis auctor. Quisque tempus purus in nulla congue, sed vulputate nulla interdum.
    Curabitur in tortor at justo tempus dapibus. Ut at nisl malesuada nisl cursus posuere. Aliquam commodo condimentum urna id dapibus.</p>",
  image_link: "https://yt3.ggpht.com/a/AGF-l7_X-SVkKKTbmNhVpRvH5qR6mC8AnKbT7yRNBw=s900-c-k-c0xffffffff-no-rj-mo",
)
