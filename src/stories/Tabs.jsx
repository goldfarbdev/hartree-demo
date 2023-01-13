import React from 'react';
import data from './assets/data.json';
import {Tab, TabContent, TabsBar} from "@grafana/ui";
import { Row, Col, Container, Carousel, Card, Image } from "react-bootstrap-storybook";
import './tabs.scss';

export const Tabs = () => {
  const [state, updateState] = React.useState(data.products);
  return (
      <div>
        <TabsBar className={'tab-images'}>
          {state.map((tab, index) => {
            return (
              <Tab
                key={index}
                label={(<Image src={tab.thumbnail} width={50} />)}
                active={tab.active}
                onChangeTab={() => updateState(state.map((tab, idx) => ({ ...tab, active: idx === index })))}
              />
            );
          })}
        </TabsBar>
        <TabContent className={['tab-content']}>
            {state.map((tab, index) => {
                const images = tab.images.map((image, index) => {
                    return {
                        id: index,
                        src: image
                    }
                })
                const carousel = (
                    <Carousel
                        data={images}
                        minHeight={200}
                    />
                )
                let ratings = [];

                for (let i=0; i < 5; i++) {
                    let ratingClass = '';
                    if (i < tab.rating) {
                        ratingClass = tab.rating < i + .5 ? '-half' : '-fill';
                    }

                    ratings.push((<i class={'text-warning bi bi-star' + ratingClass}></i>));
                };

                return (
                    state[index].active &&
                        <Container>
                            <Row>
                                <b>Category: {tab.category}</b>
                                <Col>
                                    {carousel}
                                </Col>
                                <Col>
                                    <h1 className={'ms-0'}>{tab.title}</h1>

                                    <p>Brand: <b>{tab.brand}</b></p>
                                    <p title={tab.rating}>
                                        <span style={{cursor: 'pointer'}}>{ratings}</span>
                                    </p>
                                   <table className={'mb-2'}>
                                       <tbody>

                                            <tr>
                                               <td>List Price: </td>
                                               <td><strike>${tab.price}</strike></td>
                                            </tr>
                                            <tr>
                                               <td className={'text-end'}>Price: </td>
                                               <td>${parseFloat(tab.price*(1-(tab.discountPercentage/100))).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>You Save: </td>
                                                <td>${parseFloat(tab.price*(tab.discountPercentage/100)).toFixed(2)} ({tab.discountPercentage}%)</td>
                                            </tr>
                                       </tbody>
                                   </table>

                                    <p>{tab.stock} left in stock</p>

                                    <Card
                                        header={'About this item'}
                                        body={tab.description}
                                        className={'mt-3'}
                                    />
                                </Col>
                            </Row>
                        </Container>
                );
            })}
        </TabContent>
      </div>
  );
};
