import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clko7emte10p001ta25u88rxo/master"
);

export const getAllBus = async () => {
  const response = await hygraph.request(
    `query GetAllBus {
          buses {
            id
            vendor
            vehicleNo
            endTime
            startTime
            active
            routes {
              id
              route
            }
          }
        }`
  );

  return response;
};
