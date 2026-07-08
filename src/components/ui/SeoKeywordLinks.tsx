import { useState } from "react";
import { Link } from "react-router-dom";
import "./SeoKeywordLinks.css";

const keywordPages = [
  {
    title: "8 BHK Villa in Lonavala",
    slug: "/8-bhk-villa-in-lonavala",
  },
  {
    title: "Large Villas for Rent in Lonavala",
    slug: "/large-villas-for-rent-in-lonavala",
  },
  {
    title: "Villa for Big Group in Lonavala",
    slug: "/villa-for-big-group-in-lonavala",
  },
  {
    title: "Luxury Villa for Family Reunion Lonavala",
    slug: "/luxury-villa-for-family-reunion-lonavala",
  },
  {
    title: "Corporate Retreat Villa Lonavala",
    slug: "/corporate-retreat-villa-lonavala",
  },
  {
    title: "Private Villa for 15+ Guests Lonavala",
    slug: "/private-villa-for-15-plus-guests-lonavala",
  },
  {
    title: "Villa for Pre Wedding Party Lonavala",
    slug: "/villa-for-pre-wedding-party-lonavala",
  },
];

export default function SeoKeywordLinks() {
  const [open, setOpen] = useState(false);

  return (
    <section className="seoKeywords">
      <div className="seoKeywordsContainer">

        <button
          className="seoKeywordsBtn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {/* <span>
            Explore More Villa Categories
          </span> */}

          <i
            className={`fas ${
              open ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />
        </button>

        {open && (
          <div className="seoKeywordsGrid">

            {keywordPages.map((item) => (
              <Link
                key={item.slug}
                to={item.slug}
                className="seoKeywordLink"
                title={item.title}
              >
                {item.title}
              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}