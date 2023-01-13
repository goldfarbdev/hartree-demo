import React from 'react';
import data from './assets/data.json';
import { Row, Col, Container, Carousel, Card, Image, Tabs } from "react-bootstrap-storybook";
import './tabs.scss';

export const ProductsDemo = () => {
  const products = data.products.map((product, index) => {
      const images = product.images.map((image, index) => {
          return {
              id: index,
              src: image
          }
      });

      const carousel = (
          <Carousel
              data={images}
              minHeight={200}
          />
      );

      let ratings = [];

      for (let i=0; i < 5; i++) {
          let ratingClass = '';
          if (i < product.rating) {
              ratingClass = product.rating < i + .5 ? '-half' : '-fill';
          }

        ratings.push((<i class={'text-warning bi bi-star' + ratingClass}></i>));
      };

      const body = (
          <Container>
              <Row>
                  <b>Category: {product.category}</b>
                  <Col>
                      {carousel}
                  </Col>
                  <Col>
                      <h1 className={'ms-0'}>{product.title}</h1>

                      <p>Brand: <b>{product.brand}</b></p>
                      <p title={product.rating}>
                          <span style={{cursor: 'pointer'}}>{ratings}</span>
                      </p>
                      <table className={'mb-2'}>
                          <tbody>

                          <tr>
                              <td>List Price: </td>
                              <td><strike>${product.price}</strike></td>
                          </tr>
                          <tr>
                              <td className={'text-end'}>Price: </td>
                              <td>${parseFloat(product.price*(1-(product.discountPercentage/100))).toFixed(2)}</td>
                          </tr>
                          <tr>
                              <td>You Save: </td>
                              <td>${parseFloat(product.price*(product.discountPercentage/100)).toFixed(2)} ({product.discountPercentage}%)</td>
                          </tr>
                          </tbody>
                      </table>

                      <p>{product.stock} left in stock</p>

                      <Card
                          header={'About this item'}
                          body={product.description}
                          className={'mt-3'}
                      />
                  </Col>
              </Row>
          </Container>
      );
      return {
          component: body,
          eventKey: index,
          title: <Image src={product.thumbnail} width={50} />
      }
  })
    return (
        <Tabs
            defaultActiveKey={'0'}
            tabs={products}
        />
    );
};
