import SearchSelect from './SearchSelect.jsx';

export default {
  title: 'Components/SearchSelect',
  component: SearchSelect,
};

const sampleItems = [
  { id: 1, name: 'Beef' },
  { id: 2, name: 'Pork' },
  { id: 3, name: 'Seafood' },
  { id: 4, name: 'Desserts' },
  { id: 5, name: 'Ackee' },
  { id: 6, name: 'Lamb' },
];

export const Default = () => (
  <div style={{ width: '300px' }}>
    <SearchSelect
      items={sampleItems}
      onSelect={(item) => alert(`Selected: ${item.id} ${item.name}`)}
      placeholder="Ingredients"
    />
  </div>
);
