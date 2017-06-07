import { inheritSerialization, autoserialize } from "cerialize";
import { NormalizedDSpaceObject } from "./normalized-dspace-object.model";
import { Bitstream } from "../../shared/bitstream.model";
import { mapsTo } from "../builders/build-decorators";

@mapsTo(Bitstream)
@inheritSerialization(NormalizedDSpaceObject)
export class NormalizedBitstream extends NormalizedDSpaceObject {

    /**
     * The size of this bitstream in bytes(?)
     */
    @autoserialize
    size: number;

    /**
     * The relative path to this Bitstream's file
     */
    @autoserialize
    url: string;

    /**
     * The mime type of this Bitstream
     */
    @autoserialize
    mimetype: string;

    /**
     * The format of this Bitstream
     */
    format: string;

    /**
     * The description of this Bitstream
     */
    description: string;

    /**
     * An array of Bundles that are direct parents of this Bitstream
     */
    parents: Array<string>;

    /**
     * The Bundle that owns this Bitstream
     */
    owner: string;

    @autoserialize
    retrieve: string;
}
