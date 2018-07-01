
export type TreeItemType = {
  id: string;
  name: string;
  items?: TreeItemType[];
};

export type TreeDomType = 'caption' | 'icon';

export const testDataForTree: TreeItemType[] = [{
  id: '1',
  name: 'node1',
  items: [{
    id: '1.1',
    name: 'sub11',
  }, {
    id: '1.2',
    name: 'sub11',
  }, {
    id: '1.3',
    name: 'sub11',
  }, {
    id: '1.4',
    name: 'sub11',
  }]
}, {
  id: '2',
  name: 'node2',
  items: [{
    id: '2.1',
    name: 'sub21',
  }, {
    id: '2.2',
    name: 'sub21',
  }, {
    id: '2.3',
    name: 'sub21',
  }, {
    id: '2.4',
    name: 'sub21',
  }]
}, {
  id: '3',
  name: 'node3',
  items: [{
    id: '3.1',
    name: 'sub31',
  }, {
    id: '3.2',
    name: 'sub31',
  }, {
    id: '3.3',
    name: 'sub31',
  }, {
    id: '3.4',
    name: 'sub31',
    items: [{
      id: '3.4.1',
      name: 'sub31',
    }, {
      id: '3.4.2',
      name: 'sub31',
    }, {
      id: '3.4.3',
      name: 'sub31',
    }, {
      id: '3.4.4',
      name: 'sub31',
      items: [{
        id: '3.4.4.1',
        name: 'sub31',
      }, {
        id: '3.4.4.2',
        name: 'sub31',
      }, {
        id: '3.4.4.3',
        name: 'sub31',
      }, {
        id: '3.4.4.4',
        name: 'sub31',
      }]
    }]
  }]
}, {
  id: '4',
  name: 'node4',
}];

