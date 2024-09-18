import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-4 pr-8">
      <p className="text-heading3-bold">Special Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="scroll-container flex">
          <div className="scroll-content flex">
            {collections.map((collection: CollectionType) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
                className="flex-shrink-0 mx-2"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={200}
                  height={200}
                  className="rounded-full cursor-pointer"
                />
                {/* <p className="text-center font-bold mt-1">{collection.title}</p> */}
              </Link>
            ))}
            {/* Duplicating collections for seamless infinite scroll */}
            {collections.map((collection: CollectionType) => (
              <Link
                href={`/collections/${collection._id}`}
                key={`${collection._id}-duplicate`}
                className="flex-shrink-0 mx-2"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={200}
                  height={200}
                  className="rounded-full cursor-pointer"
                />
                {/* <p className="text-center font-bold mt-1">{collection.title}</p> */}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
