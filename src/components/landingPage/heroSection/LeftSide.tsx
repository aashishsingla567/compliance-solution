import Button from "~/components/atoms/Button";
import { Divider } from "~/components/atoms/Divider";
import { calendlyLink } from "~/constants";
import useCalendly from "~/hooks/useCalendly";

const LeftSide = () => {
  const bookCall = useCalendly({
    calendlyLink,
  });

  return (
    <section className="my-8 flex  flex-col items-start justify-start gap-4 text-center md:mb-0 md:w-1/2 md:text-left">
      <h2 className="text-2xl font-bold leading-tight md:text-4xl">
        Unlock your potential with expert support, Every step of the way
      </h2>
      <p className="text-700 text-lg">
        Streamlined solutions for all your regulatory, tax, and business
        needs—so you can experience relief and focus on what truly matters.
      </p>
      <div className="my-1 flex w-full justify-between gap-4 md:w-auto">
        <Button className="flex-1" onClick={bookCall}>
          Book your call
        </Button>
        <Button variant="text" className="flex-2">
          Learn more...
        </Button>
      </div>
      <div className="flex w-full justify-between gap-4 text-center">
        <a
          href="tel:+1-800-123-4567"
          className="link-hover link flex flex-1 flex-col items-start gap-4"
        >
          <p className="text-700 text-md font-semibold md:text-lg">
            Or call us:
          </p>
          <div className="text-500 text-sm md:text-lg">+1-800-123-4567</div>
        </a>
        <Divider orientation="vertical" />
        <a
          href="mailto:aashishcoc123@gmail.com"
          className="link-hover link flex flex-1 flex-col items-start gap-4"
          data-cy="email-us"
        >
          <p className="text-700 text-md font-semibold md:text-lg">
            Or email us:
          </p>
          <div className="text-500 text-sm md:text-lg">
            aashishcoc123@gmail.com
          </div>
        </a>
      </div>
    </section>
  );
};

export default LeftSide;
