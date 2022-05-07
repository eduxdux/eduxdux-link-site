import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjetos($name: String!) {
    user(name: $name) {
      generativeTokens {
        name
        id
        slug
        displayUri
        metadataUri
        marketStats {
          floor
        }
      }
    }
  }
`;

//replace("ipfs://", "https://gateway.fxhash2.xyz/ipfs/");
//      metadataUri eu consigo um JSON com quase todas infos que preciso, com exceção do slug e do ID e do link do projeto
// usando metadata apenas eu consigo retorno do JSON do metadataUri dentro da call
