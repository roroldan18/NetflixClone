import { ButtonOption } from "./buttonsOptions";
import { MovieTrailer } from "./movieTrailer";
import { Notification } from "./notifications";
import { OptionProfile } from "./optionProfiles";
import { OptionsTrailer } from "./optionsTrailer";
import { SubMenu } from "./subMenus";
import { User } from "./usersProfile";

export type PropButtonManageTrailer = {
    videoIsPaused: boolean;
    setVideoIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PropUserList = {
    user: User,
}

export type PropSingleNotification = {
    notification: Notification;
}

export type PropVideoTrailer = {
    videoPath: MovieTrailer['pathVideo'],
    videoIsPaused: boolean,
    setVideoIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
}

export type PropOptionProfile = {
    option: OptionProfile,
}

export type PropCardMoreInfo ={
    option: OptionsTrailer
}


export type PropPictureSelection = {
    option : OptionsTrailer, 
    buttonsOptions: ButtonOption[], 
    numberOptionActive: number
}


export type PropProgressBar = {
    option: OptionsTrailer, 
    setNumberOptionActive: React.Dispatch<React.SetStateAction<number>>, 
    numberOptionActive: number, 
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number
}

export type propCardMovieSubMenu = {
    movie: OptionsTrailer
}

export type PropLineSubMenu = {
    menu: SubMenu;
}

export type PropSelectionBar = {
    options: OptionsTrailer[],
    buttonsOptions:ButtonOption[],
}