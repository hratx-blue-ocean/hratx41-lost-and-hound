import React from "react";
import "../Styles/splash.scss";
import { Container, Row } from "react-bootstrap";

const Resources = props => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Resources</h1>
      <p className="lead">
      How to reunite with your best pal:
      </p>
      <hr className="my-4" />
      <h4>Contact local animal shelters and animal control agencies</h4>
      <p>
        File a lost pet report with every shelter within a 60-mile radius of
        your home and visit the nearest shelters daily, if possible. To find
        your local shelter, search online or check your phone book. If there is
        no shelter in your community, contact the local police department.
        Provide these agencies with an accurate description and a recent
        photograph of your pet. Notify the police if you believe your pet was
        stolen.
      </p>

      <h4>Search the neighborhood</h4>
      <p>
        Walk or drive through your neighborhood several times each day. Ask
        neighbors, letter carriers and delivery people if they have seen your
        pet. Hand out a recent photograph of your pet and information on how you
        can be reached if your pet is found.
      </p>

      <h4>Advertise</h4>
      <p>
        Post notices at grocery stores, community centers, veterinary offices,
        traffic intersections, pet supply stores and other locations. Also,
        place advertisements in newspapers and with radio stations. Include your
        pet's sex, age, weight, breed, color and any special markings. When
        describing your pet, leave out one identifying characteristic and ask
        the person who finds your pet to describe it.
      </p>

      <h4>Be wary of pet-recovery scams</h4>
      <p>
        When talking to a stranger who claims to have found your pet, ask him to
        describe the pet thoroughly before you offer any information. If he does
        not include the identifying characteristic you left out of the
        advertisements, he may not really have your pet. Be particularly wary of
        people who insist that you give or wire them money for the return of
        your pet.
      </p>

      <h4>Don't give up your search</h4>
      <p>
        Animals who have been lost for months have been reunited with their
        owners. A pet—even an indoor pet—has a better chance of being returned
        if she always wears a collar and an ID tag with your name, address and
        telephone number. Ask your local animal shelter or veterinarian if
        permanent methods of identification (such as microchips) are available
        in your area.
      </p>
    </div>
  );
};

export default Resources;

export default Resources;
