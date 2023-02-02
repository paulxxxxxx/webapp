import type { NetworkData } from "@/types/Network";
import osmoIcon from "@/assets/icons/coins/osmosis.svg";
import { NATIVE_NETWORK } from "@/config/env";
import { NETWORK as OSMO_NETWORK } from './osmo/network';

export const SUPPORTED_NETWORKS = [
    NATIVE_NETWORK,
    {
        prefix: "osmo",
        value: "osmo",
        label: "Osmosis",
        icon: osmoIcon,
        native: false,
        estimation: 20,
        sourceChannel: "channel-0",
        key: "OSMO"
    },
];

export const NETWORKS_DATA: {
    [key: string]: {
        supportedNetworks: {
            [key: string]: NetworkData
        }
    }
} = {
    localnet: {
        supportedNetworks: {
            OSMO: OSMO_NETWORK
        }
    },
    devnet: {
        supportedNetworks: {
            OSMO: OSMO_NETWORK
        }
    },
    testnet: {
        supportedNetworks: {
            OSMO: OSMO_NETWORK
        }
    },
    mainnet: {
        supportedNetworks: {
            OSMO: OSMO_NETWORK
        }
    },
};