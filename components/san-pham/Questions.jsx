import { useTranslations } from "next-intl";
import Image from "next/image";
import Title from "../common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Questions({ data, img, isPMSPage }) {
  const t = useTranslations("Product");

  return (
    <div className="w-full flex justify-center items-center">
      <div className="px-5 py-3 md:px-8 md:py-6 max-w-screen-xl w-full">
        <div className="mt-16 md:mt-32">
          <Title label={t("ask")} />
          <div className="mt-8 lg:grid grid-cols-12 flex flex-col gap-10">
            <div className="col-span-5 w-full flex items-start justify-center">
              <Image
                src={img}
                width="500"
                height="300"
                alt=""
                objectFit="contain"
              />
            </div>
            <div className="col-span-7">
              <Accordion type="single" collapsible>
                {data.map((item, index) => (
                  <AccordionItem key={item.ask} value={`item-${index + 1}`}>
                    <AccordionTrigger>{item.ask}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
