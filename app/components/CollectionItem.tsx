"use client";import React from "react";
import { Item, Item2, PriceInfo } from "../services/model/collections_response";
import { Container, Row, Col } from "reactstrap";

const CollectionItem = (item: Item) => {
  const truncateTitle = (title: string,) => {
    if (title.length > 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };
  return (
    <Container className=" ">
      <Row className="single-collection-container">
        <Col className="first-column">
       
            <h1 className="item-title">{truncateTitle(item.title)}</h1>
            <p className="item-desc">{item.subtitle}</p>
        </Col>
        <Col className="second-column" >
        {item.items.slice(0, 4).map((product) => (
    <Product key={product.key} {...product} />
  ))}
        </Col>
      </Row>
    </Container>
  );
};

const StarRating = ({ rating }) => {
  const star = Array.from({ length: 1 }, (_, index) => (
    <span key={index} className="star">
      &#9733;
    </span>
  ));

  return <div className="star-rating star">{star}{rating}</div>;
};

const PriceTag = ({ priceInfo }: { priceInfo: PriceInfo }) => {
  return (
    <div className="product-price flex">
      {priceInfo.discountRate !== 0 && (
        <p className="discount">{priceInfo.discountRate}%</p>
      )}
      <p>{priceInfo.price}</p>
    </div>
  );
};

const Product = (item: Item2) => {
  return (
    <div className="product custom-item align-items-start">
      <img src={item.publication.media[0].uri} alt={item.publication.title} />
      <p className="product-title">{item.publication.title}</p>
      <PriceTag  priceInfo={item.publication.priceInfo} />
      <StarRating rating={item.publication.rating} />
    </div>
  );
};

export default CollectionItem;
