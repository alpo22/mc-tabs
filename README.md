# mc-tabs

Simple controlled tabs component.
You can change the tabs by clicking with your mouse, or focusing on the tabs and pressing the left/right arrow keys.

![Screen Shot 2022-01-31 at 12 31 19 PM](https://user-images.githubusercontent.com/32404661/151868389-d39c71a3-c13a-4b8d-a71d-b432b2d14c80.png)

# Running app

`npm start`

# Running tests

`npm test` (also tests a11y)

# Using component

```
<Tabs activeTabKey={activeTabKey} onChange={handleChangeActiveTabKey}>
  <Tab tabKey="one">
    <Tab.Title>Tab 1</Tab.Title>
    <Tab.Content>...</Tab.Content>
  </Tab>
  <Tab tabKey="two">
    <Tab.Title>Tab 2</Tab.Title>
    <Tab.Content>...</Tab.Content>
  </Tab>
  <Tab tabKey="three" onClick={() => { alert('`Tab.Content` is not required when `onClick` is used') }}>
    <Tab.Title>Leave</Tab.Title>
  </Tab>
</Tabs>
```

# Props

### Tabs

| Prop         | Type   | Required? | Description                                                                   |
| ------------ | ------ | --------- | ----------------------------------------------------------------------------- |
| activeTabKey | string | Yes       | The unique key of the currently active tab.                                   |
| onChange     | func   | Yes       | The function to call when they change tabs (by clicking or using arrow keys). |

### Tabs.Tab

| Prop     | Type   | Required? | Description                                                                                            |
| -------- | ------ | --------- | ------------------------------------------------------------------------------------------------------ |
| tabKey   | string | Yes       | The unique key of this tab.                                                                            |
| children | nodes  | Yes       | A `Tab.Title` component should always be included.                                                     |
|          |        |           | A `Tab.Content` component should be included unless using the `onClick` prop.                          |
| onClick  | func   | No        | A function to call when they click on this tab (using the mouse), or press `enter` using the keyboard. |
