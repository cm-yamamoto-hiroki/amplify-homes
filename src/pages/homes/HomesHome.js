import {
    getOverrideProps,
    useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { useParams } from "react-router-dom";
import { HomeCard } from '../../ui-components'
import { Home } from "../../models";

export const HomesHome = () => {
    const params = useParams();
    const home_id = params.id;
    const home = useDataStoreBinding({
        type: "record",
        model: Home,
        id: home_id,
    }).item;
    console.log(home);
    return (
        <HomeCard home={home} />
    );
}

export default HomesHome;
