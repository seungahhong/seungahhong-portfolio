import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

import CardB from '../../components/pages/CardB';
import {
  companyDatas,
  companyProdjectDatas,
} from '../../helpers/datas/company';
import { IProjectDatas } from '../../helpers/datas/types';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  padding: 60px 12px 60px;
  margin: 0 auto;
`;

const DescriptionItem = styled.li`
  position: relative;
  color: #6c7a89;
  margin-top: ${(props) => props.theme.spacing['spacing-4']};
  padding-left: ${(props) => props.theme.spacing['spacing-4']};

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    content: '·';
  }

  & > div {
    margin-top: ${(props) => props.theme.spacing['spacing-4']};
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: companyDatas.map((data) => ({ params: { id: data.href } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{
  datas: IProjectDatas[];
}> = async (context) => {
  const id = context?.params?.id?.toString() || '';
  const datas = companyProdjectDatas[id];

  return {
    props: {
      datas,
    }, // will be passed to the page component as props
  };
};

const CompanyItem = ({
  datas,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    datas.length > 0 && (
      <ClassNames>
        {({ css }) => (
          <ul>
            {datas.map((data, index) => (
              <CardB
                className={css({ marginTop: '24px' })}
                key={`CompanyItem_${index}`}
                {...data}
                descriptions={
                  <ul>
                    {data.descriptions.map((description, index) => {
                      return Object.entries(description).map(
                        ([key, value], index) => {
                          return (
                            <DescriptionItem
                              key={`CompanyItem_Description_${index}`}
                            >
                              {key}:{' '}
                              {Array.isArray(value)
                                ? value.map((val, index) => (
                                    <div
                                      key={`CompanyItem_Description_value_${index}`}
                                    >
                                      {val}
                                    </div>
                                  ))
                                : value}
                            </DescriptionItem>
                          );
                        }
                      );
                    })}
                  </ul>
                }
              />
            ))}
          </ul>
        )}
      </ClassNames>
    )
  );
};

CompanyItem.getLayout = function getLayout(page: React.ReactElement) {
  return <Container>{page}</Container>;
};

export default CompanyItem;
