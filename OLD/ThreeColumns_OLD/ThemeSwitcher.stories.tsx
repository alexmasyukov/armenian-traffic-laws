import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThreeColumns } from './ThreeColumns';

export default {
  title: 'base/ThreeColumns',
  component: ThreeColumns,
} as ComponentMeta<typeof ThreeColumns>;

const Template: ComponentStory<typeof ThreeColumns> = (args) => {
  const [state, setState] = useState({
    leftCollapsed: false,
    leftHide: false,
    rightCollapsed: false,
    rightHide: false,
  });

  return (
    <>
      <div
        style={{
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <button
            onClick={() =>
              setState((prev) => ({
                ...prev,
                leftCollapsed: !prev.leftCollapsed,
              }))
            }
          >
            Collapse left sidebar
          </button>
          <br />
          <button
            onClick={() =>
              setState((prev) => ({
                ...prev,
                leftHide: !prev.leftHide,
              }))
            }
          >
            hide left sidebar
          </button>
        </div>
           
        <div>
          <button
            onClick={() =>
              setState((prev) => ({
                ...prev,
                rightCollapsed: !prev.rightCollapsed,
              }))
            }
          >
            Collapse right sidebar
          </button>
          <br />
          <button
            onClick={() =>
              setState((prev) => ({
                ...prev,
                rightHide: !prev.rightHide,
              }))
            }
          >
            hide right sidebar
          </button>
        </div>
      </div>

      <ThreeColumns {...args}>
        <ThreeColumns.LeftSidebar
          collapsed={state.leftCollapsed}
          hidden={state.leftHide}
          style={{
            background: 'red',
          }}
        >
          <div>left</div>
        </ThreeColumns.LeftSidebar>

        <ThreeColumns.Main
          style={{
            background: 'green',
          }}
        >
          Main
        </ThreeColumns.Main>

        <ThreeColumns.RightSidebar
          collapsed={state.rightCollapsed}
          hidden={state.rightHide}
          style={{
            background: 'purple',
          }}
        >
          <div>right</div>
        </ThreeColumns.RightSidebar>
      </ThreeColumns>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
