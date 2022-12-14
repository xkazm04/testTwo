import { useReward } from '../utils/rewardContext';
import {useState} from 'react'
import InputContainer from "../../components/form/InputContainer";
import { Row } from "../../components/format/Row";
import { R } from '../../components/typography/ColoredTexts';

const RewardFormNft = ({dType}) => {
    const { setRewardState } = useReward();
    const [validAddress, setValidAddress] = useState(false);

    const handleAddressChange = async (e) => {
        const add = ethers.utils.isAddress(e.target.value) 
        if (add) {
            setRewardState((prev) => ({ ...prev, tokenAddress: e.target.value }))
            setValidAddress(true)
        } else {
            setValidAddress(false)
        }
    }
    
    return <> 
    <InputContainer
        label={'Title'}
        placeholder={'Godspeed'}
        description={'Create a unique title for your reward'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, title: e.target.value  }))}
        type={'text'}
    />
    <InputContainer
        label={'Specific delivery'}
        placeholder={'Token + Autograph'}
        description={'Shortly and specifically what backer will receive'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, delivery: e.target.value  }))}
        type={'text'}
    />
    <InputContainer
        label={'Description'}
        placeholder={'Backer receives autographed copy of the book'}
        description={'Describe briefly benefit of this reward'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, desc: e.target.value  }))}
        type={'textArea'}
    />
    <InputContainer
        label={'Estimated delivery'}
        placeholder={'October 2055'}
        description={'Estimate time of delivery'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, estimation: e.target.value  }))}
        type={'text'}
    />
    <InputContainer
        label={'Pledge'}
        placeholder={'1000'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, pledge: e.target.value }))}
        type={'number'}
        description={<>
            {dType === 'Microfund' ? 
                <Row>Required amount of backer's microfund </Row> :     
                <Row>Required amount of donation</Row>}
        </>}
     />
    <InputContainer
        label={'Token name'}
        placeholder={'EYE'}
        description={'Symbol/Name of the reward token you will offer to backers'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, tokenName: e.value }))}
        type={'text'}
    />
    <InputContainer
        label={'Token address'}
        placeholder={process.env.NEXT_PUBLIC_AD_TOKEN}
        onChange={(e) => handleAddressChange(e)}
        description={<Row>Contract address of the locked token - 
               {!validAddress ? <R>Token address is not valid</R> : <G>Token address is valid</G>}
        </Row>}
        type={'text'}
     />
     <InputContainer
        label={'Token ID'}
        placeholder={'1561891981'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, nftId: e.value }))}
        description={<>ERC1155 token id defining the asset</>}
        type={'number'}
    />
    <InputContainer
        label={'Capacity'}
        placeholder={'10'}
        description={'Number of claimable rewards'}
        onChange={(e) => setRewardState((prev) => ({ ...prev, cap: e.value }))}
        type={'number'}
    />
</>
}

export default RewardFormNft