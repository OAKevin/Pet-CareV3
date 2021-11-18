PropTypes;
import autobind from "autobind-decorator";
import React, { Component } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import _ from "lodash";
import PropTypes from "prop-types";
import { FontAwesome5 } from "@expo/vector-icons";
import {Theme} from "../../components";
const { width, height } = Dimensions.get("window");

export default class ListItem extends Component {
	@autobind
	goToPetDetailView() {
		const pet_uid = this.props.pet_uid;
		const uid = this.props.uid;
		const onGoBack = this.props.onGoBack;
		this.props.navigation.navigate("PetDetailView", { pet_uid, uid, onGoBack });
	}

	render() {
		const {
			name,
			pic,
			color,
			seen,
			selected,
			key,
			id,
			species,
			breed,
			age,
			yearsOwned,
			sex,
			spayNeuter_Status,
			activity,
			weight,
			classification,
			pregnancy,
			lactating,
			size,
		} = this.props;
		var speciesColor;
		var petIcon;

		switch (species) {
			case "Cat":
				petIcon = "cat";
				speciesColor = Theme.palette.orange;
				break;
			case "Dog":
				petIcon = "dog";
				speciesColor = Theme.palette.blue;
				break;
			case "Bird":
				petIcon = "dove";
				speciesColor = Theme.palette.red;
				break;
			
			default:
				petIcon = "question";
				speciesColor = Theme.palette.black;
				break;
		}

		return (
			<TouchableOpacity
				style={[
					{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					},
				]}
				onPress={this.goToPetDetailView}
			>
				<View
					style={{
						paddingBottom: 15,
						paddingTop: 15,
						flex: 1,
						width,
						flexDirection: "row",
						borderBottomWidth: 1,
						borderColor: Theme.palette.white,
					}}
				>
					<View
						style={{
							alignSelf: "center",
							justifyContent: "center",
						}}
					>
						<View
							style={{
								borderRadius: 5,
								borderWidth: 2,
								borderColor: speciesColor,
								backgroundColor: speciesColor,
								alignSelf: "center",
								justifyContent: "center",
							}}
						>
							<Text
								style={{
									padding: 1,
									textAlign: "center",
									fontWeight: "600",
									color: Theme.palette.white,
									fontSize: 14,
								}}
							>
								{species}
							</Text>
						</View>
						{pic == "null" && (
							<View
								style={{
									height: 50,
									width: 50,
									margin: 8,
									borderRadius: 25,
									paddingRight: 5,
								}}
							>
								<FontAwesome5 name={petIcon} size={40} color={speciesColor} />
							</View>
						)}
						{pic != "null" && (
							<View
								style={{
									paddingRight: 5,
								}}
							>
								<Image
									source={{ uri: pic }}
									style={{
										borderRadius: 85,
										height: 70,
										marginBottom: 15,
										width: 70,
									}}
								/>
							</View>
						)}
					</View>
					<View
						style={{
							alignSelf: "center",
							justifyContent: "center",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: 210,
							}}
						>
							<Text
								style={{
									fontWeight: "600",
									fontSize: 36,
									color: speciesColor,
								}}
							>
								{name}
							</Text>
							<FontAwesome5
								name={sex == "female" ? "venus" : "mars"}
								size={30}
								color={sex == "female" ? Theme.palette.pink : Theme.palette.blue}
							/>
						</View>
						{breed && (
							<Text
								style={{
									height: 35,
									fontSize: 20,
									fontWeight: "300",
									color: speciesColor,
								}}
							>
								{" "}
								{breed}
							</Text>
						)}
					</View>
					<View>
						{age && (
							<Text
								style={
									sex == "female"
										? {
												height: 60,
												fontSize: 20,
												fontWeight: "300",
												color: Theme.palette.pink,
												paddingTop: 8,
												paddingLeft: 3,
										  }
										: {
												height: 60,
												fontSize: 20,
												fontWeight: "300",
												color: Theme.palette.blue,
												paddingTop: 8,
												paddingLeft: 3,
										  }
								}
							>
								{age}
							</Text>
						)}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}


