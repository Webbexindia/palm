import { Link } from "react-router-dom";
import "./styles/seo.css";
import { MainLayout } from "../../components/layout/MainLayout";

import heroImg from "../../../public/Toska-Villa.jpg";
import villaImg2 from "../../../public/villa-for-pre-wedding-party-lonavala.webp";

import SEO from "../../components/seo/SEO";
import { seoPages } from "../seo/data/seoData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const seo = seoPages["villa-for-pre-wedding-party-lonavala"];

const VillaForPreWeddingPartyLonavala = () => {

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
                        <span>Villa for Pre Wedding Party Lonavala</span>
                    </div>

                    <h1 className="pmSeoHeroTitle">
                        Villa for Pre Wedding Party Lonavala
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
                                href="https://www.palmmanorlonavala.in/villa-for-pre-wedding-party-lonavala.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Villa for Pre Wedding Party Lonavala"
                            >
                                <img
                                    src={villaImg2}
                                    alt="Villa for Pre Wedding Party Lonavala"
                                    title="Villa for Pre Wedding Party Lonavala | Palm Manor"
                                    loading="lazy"
                                    className="pmLuxuryVillaImage"
                                />
                            </a>

                            <div className="pmSeoActionButtons">

                                <Link
                                    to="/contact"
                                    className="pmSeoEnquiryBtn"
                                    title="Book Villa for Pre Wedding Party Lonavala"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Enquiry Now</span>
                                </Link>

                                <a
                                    href="https://wa.me/919987422254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pmSeoWhatsappBtn"
                                    title="WhatsApp Villa for Pre Wedding Party Lonavala"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="pmLuxuryVillaContent">

                            <h2>
                                Celebrate Your Special Moments at the Finest
                                <strong className="keyname">
                                    {" "}
                                    <a
                                        className="xyz"
                                        href="https://www.youtube.com/watch?v=1i3jSB02TLE"
                                        target="_blank"
                                        title="Villa for Pre Wedding Party Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        Villa for Pre Wedding Party Lonavala
                                    </a>
                                </strong>
                            </h2>

                            <p>
                                Looking for the perfect
                                villa for pre wedding party in Lonavala
                                where you can celebrate unforgettable moments
                                with family and friends? Palm Manor offers a
                                luxurious private villa ideal for pre-wedding
                                parties, engagement celebrations, bridal showers,
                                bachelor and bachelorette parties, cocktail
                                evenings, and intimate wedding functions in the
                                beautiful surroundings of Lonavala.
                            </p>

                            <p>
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.palmmanorlonavala.in/"
                                        title="Palm Manor | Villa for Pre Wedding Party Lonavala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}Palm Manor{" "}
                                    </a>
                                </strong> provides 
                                spacious luxury villa features elegant
                                interiors, beautifully landscaped gardens,
                                stylish party spaces, spacious bedrooms,
                                a private swimming pool, modern entertainment
                                facilities, and premium amenities that create
                                the perfect atmosphere for celebrations,
                                photography, music, and memorable pre-wedding
                                events. Whether you're hosting an intimate
                                gathering or a lively celebration, Palm Manor
                                ensures an unforgettable experience for every guest.
                            </p>

                                                        <p>
                                Unlike banquet halls and crowded resorts,
                                Palm Manor offers an exclusive private venue
                                where you can 
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.weddingwire.in/wedding-lawns-farmhouses/palm-manor--e432112"
                                        title="Villa for Pre Wedding Party Lonavala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}celebrate every pre-wedding occasion{" "}
                                    </a>
                                </strong> 
                                with complete privacy. Dance by the
                                pool, host a lively cocktail evening,
                                arrange beautiful decorations, enjoy outdoor
                                dining, and create unforgettable memories
                                with your loved ones in a peaceful setting
                                surrounded by the scenic beauty of Lonavala.
                            </p>

                            <p>
                                If you're searching online for the best
                                <strong>
                                    <a
                                        className="xyz"
                                        href="https://www.reddit.com/r/PCMC/comments/1tqrmqx/lonavala_villa_party_on_13_june_pune_to_lonavala/"
                                        target="_blank"
                                        title="Villa for Pre Wedding Party Lonavala"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}villa for pre wedding party in Lonavala
                                    </a>
                                </strong>,
                                Palm Manor offers spacious accommodation,
                                elegant interiors, premium hospitality,
                                luxurious amenities, and complete privacy.
                                Whether you're organizing a bridal shower,
                                engagement celebration, bachelor party,
                                bachelorette party, cocktail night,
                                haldi function, or an intimate wedding
                                gathering, our villa provides the perfect
                                destination for every celebration.
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
                Why Palm Manor is the Perfect{" "}
                <Link
                    to="/#about"
                    className="xyz"
                    title="Villa for Pre Wedding Party Lonavala"
                >
                    Villa for Pre Wedding Party Lonavala
                </Link>
            </h2>

            <p>
                Palm Manor offers a luxurious
                <strong title="Villa for Pre Wedding Party Lonavala">
                    {" "}<a
                            className="xyz"
                            href="https://www.justdial.com/Lonavala/Palm-Manor-Opp-Vedanta-Academy-Karla/9999P2114-2114-210326145447-N7P5_BZDET"
                            target="_blank"
                            title="Villa for Pre Wedding Party Lonavala"
                            rel="noopener noreferrer"
                        >
                            {" "}villa for pre wedding party in Lonavala
                        </a>{" "}
                </strong>
                designed for couples, families, and friends looking
                to celebrate life's most special moments. Spacious
                indoor and outdoor areas, elegant interiors,
                modern amenities, private surroundings, and
                personalized hospitality create the perfect venue
                for unforgettable pre-wedding celebrations and
                intimate wedding events.

            </p>

        </div>

        <div className="pmStayFeaturesGrid">

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🎉</div>

                <h3>Perfect Celebration Venue</h3>

                <p>
                    Spacious indoor and outdoor areas ideal
                    for pre-wedding parties, engagement
                    ceremonies, bridal showers, cocktail
                    nights, and family celebrations.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🏊</div>

                <h3>Private Pool Party Experience</h3>

                <p>
                    Celebrate with your loved ones around
                    a private swimming pool perfect for
                    music, pool parties, photographs,
                    relaxation, and memorable gatherings.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🌿</div>

                <h3>Beautiful Outdoor Spaces</h3>

                <p>
                    Landscaped gardens and scenic outdoor
                    areas provide stunning backdrops for
                    photography, decorations, celebrations,
                    and intimate wedding events.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">📸</div>

                <h3>Instagram-Worthy Photo Spots</h3>

                <p>
                    Capture unforgettable memories with
                    elegant interiors, landscaped gardens,
                    poolside settings, and beautiful
                    natural surroundings perfect for
                    pre-wedding photoshoots.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">🛏️</div>

                <h3>Luxury Group Accommodation</h3>

                <p>
                    Spacious bedrooms with premium bedding,
                    elegant interiors, attached bathrooms,
                    and comfortable accommodation for
                    family members and guests.
                </p>

            </div>

            <div className="pmStayFeatureCard">

                <div className="pmStayFeatureIcon">✨</div>

                <h3>Premium Hospitality</h3>

                <p>
                    High-speed Wi-Fi, Smart TV,
                    entertainment facilities,
                    premium furnishings,
                    personalized assistance,
                    and modern comforts ensure
                    a memorable celebration.
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
                    to="/villas/kadan"
                    title="Villa for Pre Wedding Party Lonavala"
                >
                    {" "}Villa for Pre Wedding Party Lonavala
                </Link>
            </h2>

        </div>

        <div className="pmLuxuryIntroContent">

            <p>
                If you're searching for a beautiful
                <strong>
                    <a
                        className="xyz"
                        href="https://www.reddit.com/r/LuxuryTravel/comments/1ubmyrp/looking_for_luxury_villa_corporate_outing_near/"
                        target="_blank"
                        title="Villa for Pre Wedding Party Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for pre wedding party in Lonavala
                    </a>
                </strong>,
                Palm Manor offers an exclusive destination where couples,
                families, and friends can celebrate together in style.
                Whether you're planning an engagement party,
                bridal shower, haldi ceremony, cocktail evening,
                bachelor or bachelorette party, or an intimate
                pre-wedding celebration, our luxury villa provides
                the perfect setting for unforgettable memories.
            </p>

            <p>
                Surrounded by the breathtaking Sahyadri Hills,
                Palm Manor features elegant interiors,
                spacious bedrooms, beautifully landscaped
                gardens, stylish party spaces, expansive
                living areas, a private swimming pool,
                modern entertainment facilities, and premium
                amenities that create a luxurious celebration
                experience for every guest.
            </p>

            <p>
                Whether you're organizing a weekend celebration,
                destination pre-wedding event, engagement function,
                family gathering, or wedding festivities, our
                <strong>
                    <Link
                        to="/contact"
                        title="Villa for Pre Wedding Party Lonavala"
                    >
                        {" "}villa for pre wedding party in Lonavala{" "}
                    </Link>
                </strong>
                offers complete privacy, elegant event spaces,
                luxurious accommodation, and personalized
                hospitality to make every occasion truly special.
            </p>

        </div>

    </div>

</section>

{/* AMENITIES */}

<section className="pmLuxuryAmenitiesSection">

    <div className="pmLuxuryAmenitiesContainer">

        <div className="pmLuxuryAmenitiesHeader">

            <h2>
                Premium Amenities at Palm Manor – Villa for Pre Wedding Party Lonavala
            </h2>

            <p>
                Every amenity at Palm Manor has been carefully
                selected to create memorable celebrations.
                Whether you're hosting an engagement,
                cocktail party, bridal shower,
                haldi ceremony, bachelor party,
                or intimate wedding event,
                our
                <strong>
                    <a
                        className="xyz"
                        href="https://www.goibibo.com/hotels/best-villas-in-lonavala-pb/"
                        target="_blank"
                        title="Villa for Pre Wedding Party Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for pre wedding party in Lonavala{" "}
                    </a>
                </strong>
                provides luxurious spaces, premium facilities,
                and complete privacy for unforgettable moments.
            </p>

        </div>

        <div className="pmLuxuryAmenitiesGrid">

            <div className="pmLuxuryAmenityCard">

                <h3>🏊 Private Pool Celebration</h3>

                <p>
                    Host memorable poolside celebrations,
                    cocktail evenings, music nights,
                    and fun-filled gatherings in your
                    own private swimming pool area.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🛏️ Luxury Guest Accommodation</h3>

                <p>
                    Spacious air-conditioned bedrooms with
                    premium bedding, elegant interiors,
                    attached bathrooms, and comfortable
                    accommodation for family and friends.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🍽️ Modern Kitchen & Dining Area</h3>

                <p>
                    Enjoy delicious meals with family and
                    friends using our fully equipped kitchen
                    and spacious dining area perfect for
                    celebrations and private events.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🎶 Entertainment & Indoor Games</h3>

                <p>
                    Celebrate with music, indoor games,
                    Smart TV entertainment,
                    spacious living rooms,
                    and comfortable gathering spaces
                    designed for memorable occasions.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🌿 Landscaped Garden</h3>

                <p>
                    Beautiful gardens and open lawns
                    provide elegant spaces for event décor,
                    photographs, outdoor ceremonies,
                    and relaxed celebrations surrounded
                    by nature.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>📶 High-Speed Wi-Fi</h3>

                <p>
                    Stay connected throughout your celebration
                    with reliable Wi-Fi for live streaming,
                    social media sharing,
                    video calls,
                    and entertainment.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>📸 Stunning Photo Locations</h3>

                <p>
                    Capture beautiful memories with elegant
                    architecture, landscaped gardens,
                    poolside settings, scenic mountain views,
                    and stylish interiors ideal for
                    pre-wedding photography.
                </p>

            </div>

            <div className="pmLuxuryAmenityCard">

                <h3>🚗 Ample Private Parking</h3>

                <p>
                    Spacious and secure parking for
                    multiple vehicles ensures a smooth
                    arrival experience for all your
                    guests and family members.
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
                Celebrate Before the Big Day
            </span>

            <h2>
                Book the Perfect Villa for Your Pre Wedding Party in Lonavala
            </h2>

            <p>
                Planning an engagement party, bridal shower,
                haldi ceremony, cocktail night, bachelor party,
                bachelorette celebration, or an intimate
                pre-wedding event? Palm Manor offers a premium
                <strong>
                    <a
                        className="xyz"
                        href="https://maps.app.goo.gl/5LjohNd2bW64mB5P6"
                        target="_blank"
                        title="Villa for Pre Wedding Party Lonavala"
                        rel="noopener noreferrer"
                    >
                        {" "}villa for pre wedding party in Lonavala{" "}
                    </a>
                </strong>
                featuring elegant interiors, spacious luxury
                bedrooms, beautifully landscaped gardens,
                stylish celebration spaces, a private swimming
                pool, modern entertainment facilities,
                premium amenities, and complete privacy.
                Whether you're celebrating with close family
                or a large group of friends, Palm Manor
                provides the perfect venue to create
                unforgettable memories before your wedding day.
            </p>

            <div className="pmFinalBookingButtons">

                <Link
                    to="/contact"
                    className="pmFinalBookingPrimaryBtn"
                    title="Check Availability of Villa for Pre Wedding Party Lonavala"
                >
                    Check Availability
                </Link>

                <a
                    href="https://wa.me/919987422254"
                    target="_blank"
                    title="Book Villa for Pre Wedding Party Lonavala on WhatsApp"
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

export default VillaForPreWeddingPartyLonavala;