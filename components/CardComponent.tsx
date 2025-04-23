import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const CardComponent = ({
  imgUrl,
  title,
  likes,
  link,
}: {
  imgUrl: string;
  title: string;
  likes: number;
  link: string;
}) => {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgUrl}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <Link isExternal href={link}>
          Link
        </Link>
        <small className="text-default-500">{likes} Likes</small>
      </CardHeader>
    </Card>
  );
};

export default CardComponent;
