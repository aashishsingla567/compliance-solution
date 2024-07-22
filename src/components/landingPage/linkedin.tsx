import Image from "next/image";
import MaxWidthContainer from "../MaxWidthContainer";

// components/ClientSuccessStories.js
const clientSuccessStories = [
  {
    name: "John Doe",
    role: "Business Owner",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "BluWave streamlined my finances flawlessly.",
  },
  {
    name: "Sophia Li",
    role: "Account Manager",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "Their tax management saved us greatly.",
  },
  {
    name: "Lucas White",
    role: "Lawyer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "Exceptional service with reliable insights.",
  },
  {
    name: "Sara Khan",
    role: "Investor",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "BluWave streamlined my finances flawlessly.",
  },
  {
    name: "Alex Turner",
    role: "CEO",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "Trusted them for years and never disappointed.",
  },
  {
    name: "Kelly Brown",
    role: "Freelancer",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "Personalized support exceeded expectations.",
  },
  {
    name: "Mark Lee",
    role: "Startup Founder",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "BluWave's insights are incredibly reliable.",
  },
  {
    name: "Jane Smith",
    role: "Entrepreneur",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    testimonial: "They saved me both time and money.",
  },
];

const LinkedinReviews = () => {
  return (
    <MaxWidthContainer as="section" className="py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Client Success Stories
        </h2>
        <div className="flex flex-wrap justify-center">
          {clientSuccessStories.map((story, index) => (
            <div
              key={index}
              className=" m-4 max-w-72 rounded-lg bg-white p-6 shadow-lg "
            >
              <div className="mb-4 flex items-center">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={story.image}
                  alt={story.name}
                  width={40}
                  height={40}
                />
                <div className="ml-3">
                  <p className="font-bold">{story.name}</p>
                  <p className="text-sm text-gray-600">{story.role}</p>
                </div>
                <a href={story.linkedin} className="ml-auto text-blue-600">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <p>{story.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="btn btn-primary">Read More Stories</button>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LinkedinReviews;
