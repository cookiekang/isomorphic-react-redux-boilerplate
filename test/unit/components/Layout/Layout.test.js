import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Layout from 'src/components/Layout/Layout';

describe('Layout', () => {
  it('should have className layout', () => {
    const wrapper = shallow(
      <Layout>
        <div></div>
      </Layout>
    );

    expect(wrapper.find('.layout')).to.exist();
    expect(wrapper.find('.layout')).to.have.length(1);
  });
});
