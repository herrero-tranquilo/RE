/** @tsx tsx */
import React from "react";
import { action } from "@storybook/addon-actions";
import { Carousel as Component, CarouselItem as ComponentItem } from "./index";

export default {
  title: "Carousel",
  parameters: {
    componentSubtitle: "Carousel",
  },
};

export const Carousel = () => {
  const dataList = [
    {
      id: 1,
      title: "Title1",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user1" },
    },
    {
      id: 2,
      title: "Title2",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user2" },
    },
    {
      id: 3,
      title: "Title3",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user3" },
    },
    {
      id: 4,
      title: "Title4",
      readcount: 0,
      updatedAt: "2020:04:04",
      user: { userName: "user4" },
    },
  ];
  return (
    <Component
      pageDataList={dataList}
      CarouselItem={(data, index) => (
        <ComponentItem key={index} length={dataList.length} data={data} />
      )}
    />
  );
};
Carousel.story = {
  name: "default",
};