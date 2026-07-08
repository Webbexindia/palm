import { Link } from "react-router-dom";
import "./styles/seo.css";
import { MainLayout } from "../../components/layout/MainLayout";

import heroImg from "../../../public/Toska-Villa.jpg";
import villaImg2 from "../../../public/8-bhk-villa-in-lonavala.webp";

import SEO from "../../components/seo/SEO";
import { seoPages } from "../seo/data/seoData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const seo = seoPages["8-bhk-villa-in-lonavala"];

const EightBhkVillaLonavala = () => {

    return (
        <MainLayout>

            <SEO {...seo} />

            {/* HERO */}
            <section
                className="pmSeoHeroSection"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.65)), url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="pmSeoHeroContainer">

                    <div className="pmSeoBreadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>8 BHK Villa in Lonavala</span>
                    </div>

                    <h1 className="pmSeoHeroTitle">
                        8 BHK Villa in Lonavala
                    </h1>

                </div>
            </section>

            {/* IMAGE SECTION */}
            <section className="pmLuxuryVillaInfoSection">
                <div className="pmLuxuryVillaInfoContainer">
                    <div className="pmLuxuryVillaInfoGrid">

                        {/* Image */}
                        <div className="pmLuxuryVillaImageWrapper">

                            <a
                                href="https://www.palmmanorlonavala.in/8BHK-villa-Lonavala.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="8 BHK Villa in Lonavala"
                            >
                                <img
                                    src={villaImg2}
                                    alt="8 BHK Villa in Lonavala"
                                    title="8 BHK Villa in Lonavala | Palm Manor"
                                    loading="lazy"
                                    className="pmLuxuryVillaImage"
                                />
                            </a>

                            <div className="pmSeoActionButtons">

                                <Link
                                    to="/contact"
                                    className="pmSeoEnquiryBtn"
                                    title="Book 8 BHK Villa in Lonavala"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Enquiry Now</span>
                                </Link>

                                <a
                                    href="https://wa.me/919987422254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pmSeoWhatsappBtn"
                                    title="WhatsApp for 8 BHK Villa in Lonavala"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="pmLuxuryVillaContent">

                            <h2>
                                Discover the Finest
                                <strong className="keyname">
                                    {" "}
                                    <a
                                        className="xyz"
                                        href="https://www.justdial.com/Lonavala/Palm-Manor-Opp-Vedanta-Academy-Karla/9999P2114-2114-210326145447-N7P5_BZDET"
                                        target="_blank"
                                        title="8 BHK Villa in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        8 BHK Villa in Lonavala
                                    </a>
                                </strong>
                            </h2>

                            <p>
                                Looking for a premium
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.instagram.com/reel/CsGsKM0tTdC/?hl=en"
                                        title="8 BHK Villa in Lonavala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}8 BHK villa in Lonavala
                                    </a>
                                </strong>
                                {" "}that combines luxury, privacy, spacious accommodation,
                                and premium hospitality?
                                <strong>
                                    <a
                                        href="https://www.palmmanorlonavala.in/"
                                        target="_blank"
                                        title="Palm Manor | Luxury Villa in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}Palm Manor{" "}
                                    </a>
                                </strong>
                                offers an exceptional stay experience for large families,
                                corporate groups, destination celebrations, reunions,
                                and friends seeking an exclusive getaway amidst the
                                scenic beauty of Lonavala. Every corner of the villa
                                has been thoughtfully designed to provide maximum
                                comfort, elegance, and unforgettable memories.
                            </p>

                            <p>
                                Our beautifully designed
                                <strong>
                                    {" "}
                                    <Link
                                        to="/villas/blick"
                                        title="8 BHK Villa in Lonavala"
                                    >
                                        8 BHK Villa in Lonavala
                                    </Link>{" "}
                                </strong>
                                features eight spacious air-conditioned bedrooms,
                                luxurious interiors, expansive living spaces,
                                modern décor, a fully equipped kitchen,
                                landscaped outdoor areas, and a private swimming
                                pool. Whether you're planning a weekend getaway,
                                destination event, or extended holiday, Palm Manor
                                provides everything needed for a luxurious stay.
                            </p>

                                                        <p>
                                Unlike crowded hotels and resorts, Palm Manor offers
                                a completely private environment where you can relax,
                                celebrate, and enjoy quality time with your family,
                                friends, or colleagues. Take a refreshing swim,
                                organize a barbecue evening, enjoy indoor entertainment,
                                and experience the peaceful surroundings while staying
                                at one of the finest
                                <strong> 8 BHK villas in Lonavala </strong>
                                for large groups.
                            </p>

                            <p>
                                If you're searching online for the best
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.makemytrip.com/hotels/hillscape_entire_8_bhk_villa-details-lonavala.html"
                                        target="_blank"
                                        title="8 BHK Villa in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}8 BHK villa in Lonavala
                                    </a>
                                </strong>,
                                Palm Manor offers the perfect combination of spacious
                                accommodation, luxury amenities, privacy, premium
                                hospitality, and breathtaking natural surroundings.
                                Whether you're planning a family reunion, corporate
                                outing, birthday celebration, bachelor party,
                                destination event, or weekend getaway, every stay is
                                designed to create unforgettable memories.
                            </p>

                        </div>
                    </div>
                </div>
            </section>



{/* WHY CHOOSE PALM MANOR */}
<section className="pmStayFeaturesSection">
    <div className="pmStayFeaturesContainer">
        <div className="pmStayFeaturesHeader">
            <h2>
                Why Palm Manor is the Best{" "}
                <Link
                    to="/#about"
                    className="xyz"
                    title="8 BHK Villa in Lonavala"
                >
                    8 BHK Villa in Lonavala
                </Link>
            </h2>

            <p>
                Palm Manor offers an exceptional
                <strong title="8 BHK Villa in Lonavala">
                    {" "}8 BHK villa in Lonavala{" "}
                </strong>
                specially designed for large families, corporate teams,
                destination celebrations, and group vacations. Featuring
                spacious interiors, elegant bedrooms, premium amenities,
                complete privacy, and personalized hospitality, Palm Manor
                delivers a luxurious holiday experience that makes it one of
                the most preferred
                <strong>
                    <a
                        className="xyz"
                        href="https://www.airbnb.co.in/rooms/48060912?source_impression_id=p3_1782983964_P3YaZbi6RXmTivKm"
                        target="_blank"
                        title="8 BHK Villa in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}8 BHK villas in Lonavala
                    </a>
                </strong>.
            </p>
        </div>

        <div className="pmStayFeaturesGrid">

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🛏️</div>
                <h3>Eight Spacious Luxury Bedrooms</h3>
                <p>
                    Relax in eight beautifully designed air-conditioned
                    bedrooms featuring premium bedding, attached bathrooms,
                    stylish interiors, and ample space for large groups,
                    families, and corporate stays.
                </p>
            </div>

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🏊</div>
                <h3>Private Swimming Pool</h3>
                <p>
                    Enjoy exclusive access to a large private swimming pool,
                    perfect for pool parties, family fun, celebrations,
                    weekend getaways, and relaxing evenings in Lonavala.
                </p>
            </div>

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🌿</div>
                <h3>Beautiful Outdoor Spaces</h3>
                <p>
                    Spend quality time in landscaped gardens with peaceful
                    surroundings, outdoor seating, open lawns, and beautiful
                    spaces perfect for photography and private gatherings.
                </p>
            </div>

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🍽️</div>
                <h3>BBQ & Celebration Area</h3>
                <p>
                    Host birthday parties, family reunions, anniversaries,
                    bachelor parties, and corporate gatherings with our
                    dedicated BBQ and outdoor celebration space.
                </p>
            </div>

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🚗</div>
                <h3>Private Parking</h3>
                <p>
                    Spacious and secure parking facilities accommodate
                    multiple vehicles, making travel convenient for
                    large groups arriving together.
                </p>
            </div>

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">📶</div>
                <h3>Premium Modern Amenities</h3>
                <p>
                    Enjoy high-speed Wi-Fi, Smart TV, indoor games,
                    premium furnishings, spacious living areas,
                    and everything required for a luxurious stay.
                </p>
            </div>

        </div>
    </div>
</section>

{/* INTRO */}
<section className="pmLuxuryIntroSection">
    <div className="pmLuxuryIntroContainer">
        <div className="pmLuxuryIntroHeading">
            <h2>
                Palm Manor
                <Link
                    className="xyz"
                    to="/#about"
                    title="8 BHK Villa in Lonavala"
                >
                    {" "}8 BHK Villa in Lonavala
                </Link>
            </h2>
        </div>

        <div className="pmLuxuryIntroContent">
            <p>
                If you're searching for a premium
                <strong>
                    <a
                        className="xyz"
                        href="https://www.reddit.com/r/LuxuryTravel/comments/1ubmyrp/looking_for_luxury_villa_corporate_outing_near/"
                        target="_blank"
                        title="8 BHK Villa in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}8 BHK villa in Lonavala
                    </a>
                </strong>,
                Palm Manor offers the perfect combination of luxury,
                privacy, spacious accommodation, and personalized
                hospitality. Our villa is ideal for large families,
                corporate groups, destination celebrations, birthday
                parties, bachelor trips, reunions, and friends looking
                for an unforgettable getaway in the scenic hills of
                Lonavala.
            </p>

            <p>
                Surrounded by the breathtaking Sahyadri mountains,
                Palm Manor features eight spacious bedrooms, elegant
                interiors, expansive living areas, premium furnishings,
                beautifully landscaped outdoor spaces, a fully equipped
                kitchen, entertainment facilities, and a private
                swimming pool designed to offer a memorable luxury
                vacation experience.
            </p>

            <p>
                Whether you're planning a weekend getaway, family
                reunion, destination celebration, pre-wedding stay,
                corporate retreat, or an extended holiday, our
                <strong>
                    <Link
                        to="/contact"
                        title="8 BHK Villa in Lonavala"
                    >
                        {" "}8 BHK Villa in Lonavala{" "}
                    </Link>
                </strong>
                provides complete privacy, modern comforts, and premium
                hospitality, making every occasion truly special for
                every guest.
            </p>
        </div>
    </div>
</section>

{/* AMENITIES */}
<section className="pmLuxuryAmenitiesSection">
    <div className="pmLuxuryAmenitiesContainer">
        <div className="pmLuxuryAmenitiesHeader">
            <h2>
                Premium Amenities at Palm Manor – 8 BHK Villa in Lonavala
            </h2>

            <p>
                Every facility at Palm Manor has been thoughtfully
                designed to deliver a luxurious and comfortable stay.
                Whether you're planning a family vacation, corporate
                outing, birthday celebration, bachelor party,
                destination event, or weekend getaway, our
                <strong>
                    <a
                        className="xyz"
                        href="https://en.wikipedia.org/wiki/Lonavala"
                        target="_blank"
                        title="8 BHK Villa in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}8 BHK villa in Lonavala{" "}
                    </a>
                </strong>
                offers everything required for an unforgettable holiday
                with complete privacy and premium comfort.
            </p>
        </div>

        <div className="pmLuxuryAmenitiesGrid">

            <div className="pmLuxuryAmenityCard">
                <h3>🏊 Private Swimming Pool</h3>
                <p>
                    Enjoy your own private swimming pool, perfect for
                    relaxing mornings, family fun, pool parties,
                    celebrations, and memorable evenings with friends
                    and loved ones.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🛏️ Eight Spacious Luxury Bedrooms</h3>
                <p>
                    Stay comfortably in eight fully air-conditioned
                    bedrooms featuring premium beds, attached bathrooms,
                    elegant interiors, wardrobes, and ample space for
                    large families and groups.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🍽️ Fully Equipped Modern Kitchen</h3>
                <p>
                    Prepare delicious meals using a fully equipped
                    kitchen with modern appliances, cookware, dining
                    essentials, and generous preparation space for
                    group dining.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🎲 Indoor Games & Entertainment</h3>
                <p>
                    Enjoy quality time with family and friends through
                    indoor games, spacious entertainment areas,
                    comfortable seating, and Smart TV facilities for
                    all age groups.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🌿 Landscaped Garden & Outdoor Seating</h3>
                <p>
                    Relax amidst beautifully landscaped gardens,
                    peaceful surroundings, comfortable outdoor seating,
                    and open spaces perfect for conversations,
                    photography, yoga, and celebrations.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>📶 High-Speed Wi-Fi</h3>
                <p>
                    Stay connected with fast Wi-Fi throughout the villa,
                    whether you're working remotely, streaming movies,
                    attending online meetings, or browsing the internet.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>📺 Smart TV & Premium Entertainment</h3>
                <p>
                    Watch your favourite OTT platforms, movies, live
                    sports, and entertainment on Smart TVs after an
                    exciting day exploring the beautiful attractions
                    of Lonavala.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🚗 Secure Private Parking</h3>
                <p>
                    Spacious on-site parking for multiple vehicles
                    ensures convenience and safety for families,
                    corporate teams, and large groups travelling
                    together.
                </p>
            </div>

        </div>
    </div>
</section>

{/* FINAL BOOKING CTA */}

<section className="pmFinalBookingSection">
    <div className="pmFinalBookingContainer">
        <div className="pmFinalBookingContent">

            <span className="pmFinalBookingTag">
                Book Your Luxury Villa Today
            </span>

            <h2>
                Reserve Your 8 BHK Villa in Lonavala for an Unforgettable Stay
            </h2>

            <p>
                Planning a family reunion, birthday celebration, bachelor
                party, corporate retreat, destination event, or a relaxing
                weekend getaway? Palm Manor offers a premium
                <strong>
                    <a
                        className="xyz"
                        href="https://maps.app.goo.gl/5LjohNd2bW64mB5P6"
                        target="_blank"
                        title="8 BHK Villa in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}8 BHK villa in Lonavala{" "}
                    </a>
                </strong>
                featuring eight spacious luxury bedrooms, a private
                swimming pool, expansive living spaces, elegant interiors,
                landscaped outdoor areas, premium amenities, and complete
                privacy for large families and groups. Every stay at Palm
                Manor is carefully designed to provide a luxurious and
                memorable holiday experience in the heart of Lonavala.
            </p>

            <div className="pmFinalBookingButtons">

                <Link
                    to="/contact"
                    className="pmFinalBookingPrimaryBtn"
                    title="Check Availability of 8 BHK Villa in Lonavala"
                >
                    Check Availability
                </Link>

                <a
                    href="https://wa.me/919987422254"
                    target="_blank"
                    title="Book 8 BHK Villa in Lonavala on WhatsApp"
                    rel="noopener noreferrer"
                    className="pmFinalBookingSecondaryBtn"
                >
                    WhatsApp Booking
                </a>

            </div>

        </div>
    </div>
</section>

        </MainLayout>

    );

};

export default EightBhkVillaLonavala;
