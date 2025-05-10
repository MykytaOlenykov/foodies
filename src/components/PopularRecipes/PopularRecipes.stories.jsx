import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PopularRecipes } from './PopularRecipes';
import { store } from "../../store/index.js";
import { Provider } from "react-redux";

export default {
  title: 'Components/PopularRecipes',
  component: PopularRecipes,
};

const Template = (args) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>
        <PopularRecipes {...args} />
    </MemoryRouter>
  </Provider>
);

const mockRecipes = [
  {
    "id": 1,
    "title": "Battenberg Cake",
    "description": "A classic British cake made with almond sponge cake and covered with marzipan. It is traditionally pink and yellow checkered in appearance.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Battenberg%20Cake.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 1,
      "name": "GoIT",
      "avatarURL": null
    }
  },
  {
    "id": 283,
    "title": "Tunisian Orange Cake",
    "description": "A deliciously moist cake made with fresh orange juice and zest, almond flour, and a touch of rosewater.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Tunisian%20Orange%20Cake.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 10,
      "name": "Artur Mykhailiuk",
      "avatarURL": "/avatars/10_df5db8a5-f2eb-4be6-a3c0-92a296e1f65c.jpg"
    }
  },
  {
    "id": 6,
    "title": "Poutine",
    "description": "A Canadian dish made with french fries, cheese curds, and gravy.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Poutine.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 1,
      "name": "GoIT",
      "avatarURL": null
    }
  },
  {
    "id": 306,
    "title": "12",
    "description": "12",
    "thumb": "/recipes/25_eb1b74ce-7d31-40a9-b769-68d57051ec6b.jpeg",
    "createdAt": "2025-05-07T15:35:05.468Z",
    "updatedAt": "2025-05-07T15:35:05.468Z",
    "owner": {
      "id": 25,
      "name": "Kate",
      "avatarURL": null
    }
  },
  {
    "id": 305,
    "title": "cx",
    "description": "ca",
    "thumb": "/recipes/21_5db39247-558c-4355-880e-d3b7490bed70.png",
    "createdAt": "2025-05-07T15:34:53.384Z",
    "updatedAt": "2025-05-07T15:34:53.384Z",
    "owner": {
      "id": 21,
      "name": "cat cat cat cat cat cat cat cat cat cat cat cat cat cat",
      "avatarURL": null
    }
  },
  {
    "id": 302,
    "title": "Salad",
    "description": "Salad",
    "thumb": "/recipes/7_2a200209-c708-4876-8252-7a1f117424d8.png",
    "createdAt": "2025-05-03T21:59:07.579Z",
    "updatedAt": "2025-05-03T21:59:07.579Z",
    "owner": {
      "id": 7,
      "name": "Nick",
      "avatarURL": "/avatars/7_3bb1f030-f573-4177-80b2-de18318617d8.png"
    }
  },
  {
    "id": 297,
    "title": "Salad",
    "description": "Salad",
    "thumb": "/recipes/4_b49462e8-8e99-4dec-99ef-526138c53e98.png",
    "createdAt": "2025-05-02T11:56:00.267Z",
    "updatedAt": "2025-05-02T11:56:00.267Z",
    "owner": {
      "id": 4,
      "name": "Nick",
      "avatarURL": "/avatars/4_fce4d36b-a1d4-4d00-a72a-878f8b047578.png"
    }
  },
  {
    "id": 284,
    "title": "Cevapi Sausages",
    "description": "A popular Bosnian grilled meat dish made with small, skinless sausages, typically made with a mixture of beef and lamb. Served hot in a traditional Bosnian flatbread called somun, with a side of raw onions and ajvar sauce.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Cevapi%20Sausages.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 1,
      "name": "GoIT",
      "avatarURL": null
    }
  },
  {
    "id": 282,
    "title": "Summer Pistou",
    "description": "A hearty French vegetable soup made with beans, potatoes, and vegetables, topped with a pesto-like sauce.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Summer%20Pistou.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 1,
      "name": "GoIT",
      "avatarURL": null
    }
  },
  {
    "id": 280,
    "title": "Ful Medames",
    "description": "A popular Middle Eastern breakfast dish made with cooked fava beans, drizzled with olive oil, lemon juice, and a sprinkle of cumin, served with warm pita bread.",
    "thumb": "https://ftp.goit.study/img/so-yummy/preview/Ful%20Medames.jpg",
    "createdAt": "2025-05-01T16:16:51.978Z",
    "updatedAt": "2025-05-01T16:16:51.978Z",
    "owner": {
      "id": 1,
      "name": "GoIT",
      "avatarURL": null
    }
  }
];

export const Default = Template.bind({});
Default.args = {
  recipes: mockRecipes,
};

export const ManyRecipes = Template.bind({});
ManyRecipes.args = {
  recipes: Array.from({ length: 10 }, (_, i) => ({
    ...mockRecipes[i % mockRecipes.length],
    id: i + 1,
  })),
};

export const Empty = Template.bind({});
Empty.args = {
  recipes: [],
};

export const MobileView = Template.bind({});
MobileView.args = Default.args;
MobileView.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
