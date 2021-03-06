import styled, { DefaultTheme, ThemeProps, FlattenInterpolation } from 'styled-components';
import React from 'react';
import { Devices } from '../../modules';
import getViewportHideStyles from './getViewportHideStyles';

export type HideProps = {
  readonly on: Devices[];
  readonly block?: boolean;
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const StyledHide = styled(({ on, block, ...props }) => <span {...props} />)<HideProps>`
  ${(props: HideProps): FlattenInterpolation<ThemeProps<DefaultTheme>> => getViewportHideStyles(props.on, props.block)};
`;
