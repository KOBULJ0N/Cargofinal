/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Block from './style';

export const Kategory = () => {

  return (
    <Block>
      <Block.Inset>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            smooth={false}
            to='section1'
            offset={-250}
            duration={200}>
            <Block.Img1 />
          </Block.Active>
        </Block.ActiveDiv>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            to='section2'
            smooth={false}
            offset={-220}
            duration={200}>
            <Block.Img2 />
          </Block.Active>
        </Block.ActiveDiv>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            to='section3'
            smooth={false}
            offset={-20}
            duration={200}>
            <Block.Img3 />
          </Block.Active>
        </Block.ActiveDiv>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            to='section4'
            smooth={false}
            offset={120}
            duration={200}>
            <Block.Img4 />
          </Block.Active>
        </Block.ActiveDiv>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            to='section5'
            smooth={false}
            offset={90}
            duration={200}>
            <Block.Img5 />
          </Block.Active>
        </Block.ActiveDiv>

        <Block.ActiveDiv>
          <Block.Active
            activeClass='active'
            spy={true}
            to='section6'
            smooth={false}
            offset={-40}
            duration={200}>
            <Block.Img6 />
          </Block.Active>
        </Block.ActiveDiv>

      </Block.Inset>
    </Block>
  );
};

export default Kategory;
