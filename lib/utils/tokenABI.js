"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'MULTIPLIER',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'maximumRedeemable',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address'
            },
            {
                'name': '_value',
                'type': 'uint256'
            }
        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'multiplier',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address'
            },
            {
                'name': '_to',
                'type': 'address'
            },
            {
                'name': '_value',
                'type': 'uint256'
            }
        ],
        'name': 'transferFrom',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'decimals',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_value',
                'type': 'uint256'
            }
        ],
        'name': 'burn',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes'
            }
        ],
        'name': 'pubKeyToEthereumAddress',
        'outputs': [
            {
                'name': '',
                'type': 'address'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'MINT_AMOUNT',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address'
            },
            {
                'name': '_subtractedValue',
                'type': 'uint256'
            }
        ],
        'name': 'decreaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address'
            }
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32'
            },
            {
                'name': 'outputIndex',
                'type': 'uint8'
            },
            {
                'name': 'satoshis',
                'type': 'uint256'
            },
            {
                'name': 'proof',
                'type': 'bytes32[]'
            },
            {
                'name': 'pubKey',
                'type': 'bytes'
            },
            {
                'name': 'isCompressed',
                'type': 'bool'
            },
            {
                'name': 'v',
                'type': 'uint8'
            },
            {
                'name': 'r',
                'type': 'bytes32'
            },
            {
                'name': 's',
                'type': 'bytes32'
            }
        ],
        'name': 'redeemUTXO',
        'outputs': [
            {
                'name': 'tokensRedeemed',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32'
            },
            {
                'name': 'proof',
                'type': 'bytes32[]'
            }
        ],
        'name': 'canRedeemUTXOHash',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'destination',
                'type': 'address'
            }
        ],
        'name': 'releaseTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [
            {
                'name': '',
                'type': 'string'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_to',
                'type': 'address'
            },
            {
                'name': '_value',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'hash',
                'type': 'bytes32'
            },
            {
                'name': 'v',
                'type': 'uint8'
            },
            {
                'name': 'r',
                'type': 'bytes32'
            },
            {
                'name': 's',
                'type': 'bytes32'
            },
            {
                'name': 'expected',
                'type': 'address'
            }
        ],
        'name': 'validateSignature',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proof',
                'type': 'bytes32[]'
            },
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32'
            }
        ],
        'name': 'verifyProof',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32'
            },
            {
                'name': 'originalAddress',
                'type': 'bytes20'
            },
            {
                'name': 'outputIndex',
                'type': 'uint8'
            },
            {
                'name': 'satoshis',
                'type': 'uint256'
            },
            {
                'name': 'proof',
                'type': 'bytes32[]'
            }
        ],
        'name': 'canRedeemUTXO',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address'
            },
            {
                'name': 'pubKey',
                'type': 'bytes'
            },
            {
                'name': 'v',
                'type': 'uint8'
            },
            {
                'name': 'r',
                'type': 'bytes32'
            },
            {
                'name': 's',
                'type': 'bytes32'
            }
        ],
        'name': 'ecdsaVerify',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address'
            },
            {
                'name': '_addedValue',
                'type': 'uint256'
            }
        ],
        'name': 'increaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address'
            },
            {
                'name': '_spender',
                'type': 'address'
            }
        ],
        'name': 'allowance',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes'
            },
            {
                'name': 'isCompressed',
                'type': 'bool'
            }
        ],
        'name': 'pubKeyToBitcoinAddress',
        'outputs': [
            {
                'name': '',
                'type': 'bytes20'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'rootUTXOMerkleTreeHash',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalRedeemed',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'SATS_TO_TOKENS',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'name': 'merkleRoot',
                'type': 'bytes32'
            },
            {
                'name': 'totalUtxoAmount',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'burner',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'Burn',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'txid',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 'outputIndex',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'name': 'satoshis',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'proof',
                'type': 'bytes32[]'
            },
            {
                'indexed': false,
                'name': 'pubKey',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'name': 'v',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'name': 'r',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 's',
                'type': 'bytes32'
            },
            {
                'indexed': true,
                'name': 'redeemer',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256'
            }
        ],
        'name': 'UTXORedeemed',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'destination',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256'
            }
        ],
        'name': 'TokensReleased',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'spender',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'Approval',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256'
            }
        ],
        'name': 'Transfer',
        'type': 'event'
    }
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=tokenABI.js.map