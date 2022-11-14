import {MetadataFromCollection} from "./MetadataFromCollection";


export type CollectionNft ={

      chain:string;
      contract_address: string;
      token_id: string;
      metadata_url:string;
      metadata: MetadataFromCollection ;
      file_url:string;
      animation_url:string;
      cached_file_url:string;
      cached_animation_url:string;
      updated_date:string;
}