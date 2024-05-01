import { Grid } from '@mui/material';

import {GoodsItem} from './GoodsItem';

export const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
}