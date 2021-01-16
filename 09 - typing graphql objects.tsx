// Typing graphql objects and passing them around the app

import { gql, useQuery } from "@apollo/client";

export const getUserProfileQuery = gql`
  query getUserProfile {
    myProfile {
      id
      displayname
      email
      bio
      picture

      certifications {
        id
        imageUrl
        expiryDate
        acquiredDate
        credentialUrl
        certificateNumber
      }
    }
  }
`;

const ProfilePage = () => {
  // Todo what type does myProfile take?
  const myProfile = useQuery(getUserProfileQuery);

  // Todo: what types do ProfileAvatar and Certifications take?
  return (
    <>
      <ProfileAvatar />
      <Certifications />
    </>
  );
};

const Certifications = (certifications) => {
  return certifications.map((cert) => cert.id);
};

const ProfileAvatar = (props) => {
  return <Avatar imageUrl={} initials={} />;
};

const Avatar = (props) => undefined;
