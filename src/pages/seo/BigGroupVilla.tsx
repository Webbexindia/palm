import { Link } from "react-router-dom";
import "./styles/seo.css";
import { MainLayout } from "../../components/layout/MainLayout";

import heroImg from "../../../public/Toska-Villa.jpg";
import villaImg2 from "../../../public/villa-for-big-group-in-lonavala.webp";

import SEO from "../../components/seo/SEO";
import { seoPages } from "../seo/data/seoData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const seo = seoPages["villa-for-big-group-in-lonavala"];

const VillaForBigGroupInLonavala = () => {

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
                        <span>Villa for Big Group in Lonavala</span>
                    </div>

                    <h1 className="pmSeoHeroTitle">
                        Villa for Big Group in Lonavala
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
                                href="https://www.palmmanorlonavala.in/villa-for-big-group-in-lonavala.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Villa for Big Group in Lonavala"
                            >
                                <img
                                    src={villaImg2}
                                    alt="Villa for Big Group in Lonavala"
                                    title="Villa for Big Group in Lonavala | Palm Manor"
                                    loading="lazy"
                                    className="pmLuxuryVillaImage"
                                />
                            </a>

                            <div className="pmSeoActionButtons">

                                <Link
                                    to="/contact"
                                    className="pmSeoEnquiryBtn"
                                    title="Book Villa for Big Group in Lonavala"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Enquiry Now</span>
                                </Link>

                                <a
                                    href="https://wa.me/919987422254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pmSeoWhatsappBtn"
                                    title="WhatsApp Villa for Big Group in Lonavala"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="pmLuxuryVillaContent">

                            <h2>
                                Stay at the Finest
                                <strong className="keyname">
                                    {" "}
                                    <a
                                        className="xyz"
                                        href="https://www.trip.com/travel-guide/attraction/malavli/palm-manor-lonavala-serviced-luxury-villas-142829645/"
                                        target="_blank"
                                        title="Villa for Big Group in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        Villa for Big Group in Lonavala
                                    </a>
                                </strong>
                            </h2>

                            <p>
                                Planning a vacation with a large family,
                                friends, office team, or celebration group?
                                Palm Manor offers the perfect
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://commons.wikimedia.org/wiki/File:Beautiful_Villas_in_Lonavala.png"
                                        title="Villa for Big Group in Lonavala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}villa for big group in Lonavala{" "}
                                    </a>
                                </strong>
                                where luxury, privacy, and spacious living
                                come together. Our premium villa is ideal for
                                family reunions, corporate outings, birthday
                                celebrations, bachelor parties, destination
                                events, and weekend getaways surrounded by
                                the beautiful Sahyadri Hills.
                            </p>

                            <p>
                                <strong><a
                                        href="https://www.palmmanorlonavala.in/"
                                        target="_blank"
                                        title="Palm Manor | Luxury Villa in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}Palm Manor{" "}
                                    </a></strong> features spacious bedrooms,
                                elegant interiors, large living areas,
                                landscaped gardens, a private swimming
                                pool, entertainment facilities, a fully
                                equipped kitchen, and modern amenities
                                designed to comfortably accommodate
                                groups while ensuring every guest enjoys
                                a relaxing and luxurious stay.
                            </p>

                            <p>
                                Unlike crowded hotels and commercial resorts,
                                Palm Manor provides a completely private
                                environment where your entire group can relax,
                                celebrate, and create unforgettable memories.
                                Enjoy refreshing pool sessions, outdoor dining,
                                indoor entertainment, scenic mountain views,
                                and complete privacy while staying at one of
                                the best
                                <strong title="Villa for Big Group in Lonavala"> villas for big groups in Lonavala.</strong>
                            </p>

                            <p>
                                If you're searching online for the perfect
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.reddit.com/r/pune/comments/1s3l7p7/villa_in_lonavala/"
                                        target="_blank"
                                        title="Villa for Big Group in Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}villa for big group in Lonavala
                                    </a>
                                </strong>,
                                Palm Manor offers spacious accommodation,
                                premium hospitality, luxury amenities,
                                modern interiors, and peaceful surroundings.
                                Whether you're organizing a family gathering,
                                corporate retreat, birthday party,
                                bachelor celebration, friends' reunion,
                                or weekend escape, our villa delivers
                                an exceptional group stay experience.
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
                    title="Villa for Big Group in Lonavala"
                >
                    Villa for Big Group in Lonavala
                </Link>
            </h2>

            <p>
                Palm Manor offers a premium
                <strong title="Villa for Big Group in Lonavala">
                    {" "}<a
                            className="xyz"
                            href="https://www.reddit.com/r/pune/comments/1mfov9e/safe_villa_for_10_people_around_pune/"
                            target="_blank"
                            title="Villa for Big Group in Lonavala"
                            rel="noopener noreferrer"
                        >
                            {" "}villa for big group in Lonavala
                        </a>{" "}
                </strong>
                designed especially for guests travelling together.
                Whether you're planning a family vacation,
                office outing, college reunion, destination
                celebration, birthday party, bachelor trip,
                or friends' getaway, our spacious villa
                provides luxurious accommodation, complete
                privacy, premium amenities, and personalized
                hospitality for an unforgettable stay.

            </p>

        </div>

        <div className="pmStayFeaturesGrid">

            <div className="pmStayFeatureCard">
                <div className="pmStayFeatureIcon">🛏️</div>

                <h3>Spacious Bedrooms for Group Stay</h3>

                <p>
                    Comfortable air-conditioned bedrooms with
                    premium bedding, attached bathrooms,
                    elegant interiors, and ample space ensure
                    a relaxing stay for families and large groups.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🏊</div>

                <h3>Private Swimming Pool</h3>

                <p>
                    Enjoy exclusive access to your own swimming
                    pool, perfect for family fun, pool parties,
                    celebrations, and relaxing evenings with
                    your entire group.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🌿</div>

                <h3>Large Outdoor Spaces</h3>

                <p>
                    Beautiful landscaped gardens and spacious
                    outdoor seating areas provide the perfect
                    setting for conversations, games,
                    celebrations, and memorable group moments.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🍽️</div>

                <h3>BBQ & Celebration Area</h3>

                <p>
                    Host birthday celebrations, anniversaries,
                    reunions, corporate events, and private
                    parties with dedicated barbecue facilities
                    and spacious entertainment areas.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🚗</div>

                <h3>Secure Parking</h3>

                <p>
                    Ample parking space for multiple vehicles
                    makes travelling convenient for large
                    families, corporate teams, and groups
                    arriving together.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">📶</div>

                <h3>Modern Luxury Amenities</h3>

                <p>
                    High-speed Wi-Fi, Smart TV, indoor games,
                    premium furnishings, spacious living areas,
                    and every essential amenity for a luxurious
                    group holiday.
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
                    title="Villa for Big Group in Lonavala"
                >
                    {" "}Villa for Big Group in Lonavala
                </Link>
            </h2>
        </div>

        <div className="pmLuxuryIntroContent">

            <p>
                If you're looking for a luxurious
                <strong>
                    <a
                        className="xyz"
                        href="https://www.weddingwire.in/wedding-lawns-farmhouses/palm-manor--e432112"
                        target="_blank"
                        title="Villa for Big Group in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for big group in Lonavala
                    </a>
                </strong>,
                Palm Manor offers the perfect destination for memorable
                group holidays. Whether you're travelling with extended
                family, close friends, colleagues, or celebrating a
                special occasion, our spacious villa combines comfort,
                luxury, and privacy in one beautiful location.
            </p>

            <p>
                Surrounded by the breathtaking beauty of the Sahyadri
                Hills, Palm Manor features spacious bedrooms, elegant
                interiors, expansive living areas, landscaped gardens,
                a private swimming pool, entertainment facilities,
                modern furnishings, and a fully equipped kitchen.
                Every detail has been thoughtfully designed to provide
                a premium group stay experience in Lonavala.
            </p>

            <p>
                Whether you're planning a weekend getaway, family
                reunion, corporate offsite, birthday celebration,
                bachelor party, anniversary, or destination event,
                our
                <strong>
                    <Link
                        to="/contact"
                        title="Villa for Big Group in Lonavala"
                    >
                        {" "}villa for big group in Lonavala{" "}
                    </Link>
                </strong>
                offers complete privacy, spacious accommodation,
                premium amenities, and personalized hospitality,
                making every gathering comfortable and unforgettable.
            </p>

        </div>

    </div>
</section>

{/* AMENITIES */}

<section className="pmLuxuryAmenitiesSection">

    <div className="pmLuxuryAmenitiesContainer">

        <div className="pmLuxuryAmenitiesHeader">

            <h2>
                Premium Amenities at Palm Manor – Villa for Big Group in Lonavala
            </h2>

            <p>
                Every facility at Palm Manor has been carefully selected
                to provide the perfect luxury experience for group
                travellers. Whether you're visiting for a family holiday,
                friends' reunion, birthday celebration, bachelor trip,
                office outing, or weekend getaway, our
                <strong>
                    <a
                        className="xyz"
                        href="https://www.mandap.com/pune/palm-manor-in-lonavala"
                        target="_blank"
                        title="Villa for Big Group in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for big group in Lonavala{" "}
                    </a>
                </strong>
                offers everything needed for a relaxing, enjoyable,
                and memorable stay.
            </p>

        </div>

        <div className="pmLuxuryAmenitiesGrid">

            <div className="pmLuxuryAmenityCard">
                <h3>🏊 Private Swimming Pool</h3>
                <p>
                    Enjoy exclusive access to a private swimming pool
                    where your entire group can relax, celebrate,
                    play, and create unforgettable memories together.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🛏️ Spacious Luxury Bedrooms</h3>
                <p>
                    Large air-conditioned bedrooms with premium beds,
                    attached bathrooms, stylish interiors, wardrobes,
                    and comfortable sleeping arrangements for group stays.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🍽️ Fully Equipped Kitchen</h3>
                <p>
                    Prepare delicious meals with ease using our
                    modern kitchen equipped with quality appliances,
                    cookware, dining essentials, and ample preparation
                    space.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🎲 Indoor Games & Entertainment</h3>
                <p>
                    Spend quality time together enjoying indoor games,
                    Smart TV entertainment, spacious living rooms,
                    and comfortable gathering areas designed for groups.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🌿 Landscaped Garden & Outdoor Seating</h3>
                <p>
                    Beautiful gardens, peaceful surroundings,
                    spacious lawns, and outdoor seating areas
                    provide the perfect setting for relaxation,
                    conversations, and celebrations.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>📶 High-Speed Wi-Fi</h3>
                <p>
                    Stay connected with reliable internet throughout
                    the villa for work, streaming, video calls,
                    and online entertainment whenever required.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>📺 Smart TV & Entertainment</h3>
                <p>
                    Enjoy movies, OTT platforms, live sports,
                    music, and entertainment together after
                    exploring the scenic attractions of Lonavala.
                </p>
            </div>

            <div className="pmLuxuryAmenityCard">
                <h3>🚗 Secure Private Parking</h3>
                <p>
                    Spacious parking facilities for multiple
                    vehicles ensure convenience and security
                    for families, friends, and corporate groups
                    arriving together.
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
                Reserve the Best Villa for Big Group in Lonavala
            </h2>

            <p>
                Planning a family reunion, friends' getaway, corporate
                retreat, birthday celebration, bachelor party,
                anniversary, destination event, or weekend vacation?
                Palm Manor offers a premium
                <strong>
                    <a
                        className="xyz"
                        href="https://maps.app.goo.gl/5LjohNd2bW64mB5P6"
                        target="_blank"
                        title="Villa for Big Group in Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for big group in Lonavala{" "}
                    </a>
                </strong>
                featuring spacious luxury bedrooms, elegant interiors,
                expansive living areas, a private swimming pool,
                landscaped gardens, modern entertainment facilities,
                premium amenities, and complete privacy. Whether you're
                travelling with family, friends, or colleagues,
                Palm Manor provides everything required for a relaxing,
                comfortable, and unforgettable group stay in Lonavala.
            </p>

            <div className="pmFinalBookingButtons">

                <Link
                    to="/contact"
                    className="pmFinalBookingPrimaryBtn"
                    title="Check Availability of Villa for Big Group in Lonavala"
                >
                    Check Availability
                </Link>

                <a
                    href="https://wa.me/919987422254"
                    target="_blank"
                    title="Book Villa for Big Group in Lonavala on WhatsApp"
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

export default VillaForBigGroupInLonavala;