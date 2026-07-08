import { Link } from "react-router-dom";
import "./styles/seo.css";
import { MainLayout } from "../../components/layout/MainLayout";

import heroImg from "../../../public/Toska-Villa.jpg";
import villaImg2 from "../../../public/private-villa-for-15-plus-guests-lonavala.webp";

import SEO from "../../components/seo/SEO";
import { seoPages } from "../seo/data/seoData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const seo = seoPages["private-villa-for-15-plus-guests-lonavala"];

const PrivateVillaFor15PlusGuestsLonavala = () => {

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
                        <span>Private Villa for 15+ Guests Lonavala</span>
                    </div>

                    <h1 className="pmSeoHeroTitle">
                        Private Villa for 15+ Guests Lonavala
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
                                href="https://www.palmmanorlonavala.in/private-villa-for-15-plus-guests-lonavala.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Private Villa for 15 Plus Guests Lonavala"
                            >
                                <img
                                    src={villaImg2}
                                    alt="Private Villa for 15 Plus Guests Lonavala"
                                    title="Private Villa for 15 Plus Guests Lonavala | Palm Manor"
                                    loading="lazy"
                                    className="pmLuxuryVillaImage"
                                />
                            </a>

                            <div className="pmSeoActionButtons">

                                <Link
                                    to="/contact"
                                    className="pmSeoEnquiryBtn"
                                    title="Book Private Villa for 15 Plus Guests Lonavala"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Enquiry Now</span>
                                </Link>

                                <a
                                    href="https://wa.me/919987422254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pmSeoWhatsappBtn"
                                    title="WhatsApp Private Villa for 15 Plus Guests Lonavala"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="pmLuxuryVillaContent">

                            <h2>
                                Premium
                                <strong className="keyname">
                                    {" "}
                                    <a
                                        className="xyz"
                                        href="https://www.instagram.com/reel/CsGsKM0tTdC/?hl=en"
                                        target="_blank"
                                        title="Private Villa for 15 Plus Guests Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        Private Villa for 15+ Guests Lonavala
                                    </a>
                                </strong>
                            </h2>

                            <p>
                                Looking for a spacious
                                private villa for 15 plus guests in Lonavala
                                that offers complete privacy, premium amenities,
                                and luxurious accommodation? 
                                <strong><a
                                        className="xyz"
                                        href="https://www.palmmanorlonavala.in/"
                                        title="Palm Manor | Private Villa for 15 Plus Guests Lonavala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}Palm Manor{" "}
                                    </a>
                                </strong>
                                 is
                                thoughtfully designed for large families,
                                friends, corporate teams, destination
                                celebrations, bachelor parties, birthdays,
                                reunions, and weekend getaways seeking
                                comfort and exclusivity.
                            </p>

                            <p>
                                Our luxury private villa comfortably
                                accommodates groups of 15 or more guests,
                                offering spacious bedrooms, elegant interiors,
                                expansive living areas, landscaped gardens,
                                a private swimming pool, entertainment
                                facilities, and a fully equipped kitchen.
                                Every corner has been designed to ensure
                                your entire group enjoys a relaxing and
                                memorable stay in the beautiful surroundings
                                of Lonavala.
                            </p>

                                                        <p>
                                Unlike crowded hotels and commercial resorts,
                                Palm Manor offers a completely private space
                                where groups of 15 or more guests can relax,
                                celebrate, and spend quality time together.
                                Enjoy swimming, outdoor dining, indoor games,
                                beautiful mountain views, and complete privacy
                                while staying at one of the best
                                <strong> <Link className="xyz" to="/villas/toska"
                                title="Private Villa for 15 Plus Guests Lonavala">
                                {" "}Private Villa for 15+ Guests Lonavala
                                </Link>.</strong>
                            </p>

                            <p>
                                If you're searching online for the ideal
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.reddit.com/r/pune/comments/1s3l7p7/villa_in_lonavala/"
                                        target="_blank"
                                        title="Private Villa for 15 Plus Guests Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}private villa for 15 plus guests in Lonavala
                                    </a>
                                </strong>,
                                Palm Manor combines spacious accommodation,
                                luxury amenities, elegant interiors,
                                premium hospitality, and complete privacy.
                                Whether you're planning a family reunion,
                                corporate outing, birthday celebration,
                                bachelor party, destination event,
                                or weekend holiday with a large group,
                                our villa provides an unforgettable
                                stay experience for every guest.
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
                    title="Private Villa for 15 Plus Guests Lonavala"
                >
                    Private Villa for 15+ Guests Lonavala
                </Link>
            </h2>

            <p>
                Palm Manor offers a premium
                <strong title="Private Villa for 15 Plus Guests Lonavala">
                    {" "}<a
                            className="xyz"
                            href="https://www.youtube.com/watch?v=Nm0abxR_KgY"
                            target="_blank"
                            title="Private Villa for 15 Plus Guests Lonavala"
                            rel="noopener noreferrer"
                        >
                            {" "}private villa for 15 plus guests in Lonavala
                        </a>{" "}
                </strong>
                designed specifically for larger groups seeking
                luxury, comfort, and complete privacy. Whether
                you're travelling with family, friends, colleagues,
                or celebrating a special occasion, our spacious
                villa provides elegant accommodation, modern
                amenities, and personalized hospitality for an
                exceptional group stay.

            </p>

        </div>

        <div className="pmStayFeaturesGrid">

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🛏️</div>

                <h3>Spacious Bedrooms for Large Groups</h3>

                <p>
                    Comfortable air-conditioned bedrooms featuring
                    premium bedding, attached bathrooms,
                    elegant interiors, and spacious layouts
                    ideal for accommodating 15 or more guests.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🏊</div>

                <h3>Exclusive Private Swimming Pool</h3>

                <p>
                    Enjoy unlimited access to a private swimming
                    pool where your entire group can relax,
                    celebrate, play, and create unforgettable
                    holiday memories together.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🌿</div>

                <h3>Large Outdoor Spaces</h3>

                <p>
                    Beautiful landscaped gardens, open lawns,
                    and outdoor seating areas provide plenty
                    of room for conversations, games,
                    celebrations, and memorable photographs.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🍽️</div>

                <h3>BBQ & Celebration Area</h3>

                <p>
                    Host birthday parties, anniversaries,
                    family reunions, bachelor parties,
                    corporate gatherings, and weekend
                    celebrations with dedicated barbecue
                    and entertainment spaces.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🚗</div>

                <h3>Private Parking</h3>

                <p>
                    Secure on-site parking accommodates
                    multiple vehicles, making travel easy
                    and convenient for larger groups
                    arriving together.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">📶</div>

                <h3>Modern Premium Amenities</h3>

                <p>
                    High-speed Wi-Fi, Smart TV,
                    spacious living areas, indoor games,
                    premium furnishings, and modern
                    conveniences ensure every guest
                    enjoys a luxurious stay.
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
                    to="/"
                    title="Private Villa for 15 Plus Guests Lonavala"
                >
                    {" "}Private Villa for 15+ Guests Lonavala
                </Link>
            </h2>

        </div>

        <div className="pmLuxuryIntroContent">

            <p>
                If you're searching for a spacious
                <strong>
                    <a
                        className="xyz"
                        href="https://www.holidify.com/hotel-collections/villas-in-lonavala"
                        target="_blank"
                        title="Private Villa for 15 Plus Guests Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}private villa for 15 plus guests in Lonavala
                    </a>
                </strong>,
                Palm Manor offers the perfect combination of luxury,
                comfort, privacy, and personalized hospitality.
                Whether you're planning a family reunion,
                corporate retreat, birthday celebration,
                bachelor party, friends' getaway, or festive
                vacation, our villa provides everything required
                for a memorable stay with your entire group.
            </p>

            <p>
                Located amidst the scenic beauty of the Sahyadri
                Hills, Palm Manor features spacious luxury
                bedrooms, elegant interiors, expansive living
                areas, landscaped gardens, a private swimming
                pool, entertainment spaces, and modern amenities
                that comfortably accommodate 15 or more guests
                without compromising on comfort or privacy.
            </p>

            <p>
                Whether you're planning a weekend getaway,
                destination celebration, office outing,
                anniversary, family vacation, or long holiday,
                our
                <strong>
                    <Link
                        to="/contact"
                        title="Private Villa for 15 Plus Guests Lonavala"
                    >
                        {" "}private villa for 15 plus guests in Lonavala{" "}
                    </Link>
                </strong>
                provides spacious accommodation,
                premium amenities, complete privacy,
                and a relaxing atmosphere where every
                guest can enjoy an unforgettable holiday.
            </p>

        </div>

    </div>

</section>

{/* AMENITIES */}

<section className="pmLuxuryAmenitiesSection">

    <div className="pmLuxuryAmenitiesContainer">

        <div className="pmLuxuryAmenitiesHeader">

            <h2>
                Premium Amenities at Palm Manor – Private Villa for 15+ Guests Lonavala
            </h2>

            <p>
                Every amenity at Palm Manor has been carefully
                selected to provide maximum comfort for larger
                groups. Whether you're travelling with family,
                friends, colleagues, or celebrating a special
                occasion, our
                <strong>
                    <a
                        className="xyz"
                        href="https://www.weddingwire.in/wedding-lawns-farmhouses/palm-manor--e432112"
                        target="_blank"
                        title="Private Villa for 15 Plus Guests Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}private villa for 15 plus guests in Lonavala{" "}
                    </a>
                </strong>
                offers everything required for a luxurious,
                comfortable, and memorable group stay.
            </p>

        </div>

        <div className="pmLuxuryAmenitiesGrid">

            <div className="pmLuxuryAmenityCard">

                <h3>🏊 Private Swimming Pool</h3>

                <p>
                    Enjoy unlimited access to your own private
                    swimming pool where your group can relax,
                    celebrate, and spend quality time together
                    throughout your stay.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🛏️ Spacious Luxury Bedrooms</h3>

                <p>
                    Beautifully designed air-conditioned bedrooms
                    with premium bedding, attached bathrooms,
                    elegant interiors, and comfortable sleeping
                    arrangements for groups of 15 or more guests.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🍽️ Fully Equipped Kitchen</h3>

                <p>
                    Cook delicious meals using our modern kitchen
                    equipped with quality appliances,
                    cookware, dining essentials, and ample
                    preparation space for large groups.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🎲 Indoor Games & Entertainment</h3>

                <p>
                    Spend quality time together enjoying indoor
                    games, Smart TV entertainment,
                    spacious living rooms, and comfortable
                    gathering spaces designed for groups.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🌿 Landscaped Garden & Outdoor Seating</h3>

                <p>
                    Beautiful landscaped gardens,
                    peaceful surroundings,
                    open lawns, and spacious seating
                    areas provide the perfect setting
                    for celebrations and relaxation.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>📶 High-Speed Wi-Fi</h3>

                <p>
                    Stay connected with reliable internet
                    access throughout the villa for work,
                    entertainment, video calls,
                    and sharing your memorable moments.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>📺 Smart TV & Entertainment</h3>

                <p>
                    Watch movies, OTT platforms,
                    live sports, and entertainment
                    together after exploring the
                    beautiful attractions of Lonavala.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🚗 Secure Private Parking</h3>

                <p>
                    Spacious parking for multiple vehicles
                    ensures convenience and safety for
                    large groups travelling together.
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
                Book Your Private Group Villa Today
            </span>

            <h2>
                Reserve the Best Private Villa for 15+ Guests in Lonavala
            </h2>

            <p>
                Planning a weekend getaway, family reunion,
                birthday celebration, bachelor party,
                corporate outing, anniversary, destination
                event, or group vacation? Palm Manor offers a
                premium
                <strong>
                    <a
                        className="xyz"
                        href="https://maps.app.goo.gl/5LjohNd2bW64mB5P6"
                        target="_blank"
                        title="Private Villa for 15 Plus Guests Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}private villa for 15 plus guests in Lonavala{" "}
                    </a>
                </strong>
                featuring spacious luxury bedrooms,
                elegant interiors, expansive living spaces,
                a private swimming pool, landscaped gardens,
                modern entertainment facilities,
                premium amenities, and complete privacy.
                Designed especially for larger groups,
                Palm Manor comfortably accommodates
                15 or more guests, making it the perfect
                destination for memorable celebrations
                and relaxing holidays in Lonavala.
            </p>

            <div className="pmFinalBookingButtons">

                <Link
                    to="/contact"
                    className="pmFinalBookingPrimaryBtn"
                    title="Check Availability of Private Villa for 15 Plus Guests Lonavala"
                >
                    Check Availability
                </Link>

                <a
                    href="https://wa.me/919987422254"
                    target="_blank"
                    title="Book Private Villa for 15 Plus Guests Lonavala on WhatsApp"
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

export default PrivateVillaFor15PlusGuestsLonavala;