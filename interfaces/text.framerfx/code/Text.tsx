import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "lime",
    overflow: "hidden",
};

// Define type of property
interface Props {
    text: string;
}

export class Text extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "TEXT edited via git hub"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    }

    render() {
    return <div style={style}><Typography use="headline1">{this.props.text}</Typography></div>;
    }
}
