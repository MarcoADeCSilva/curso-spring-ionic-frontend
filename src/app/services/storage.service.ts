import { Injectable } from "@angular/core";
import { LocalUser } from "../../models/local_user";
import { STORAGE_KEYS } from "../../config/storage_keys.config";

@Injectable()
export class StorageService{

    getLocalUser(): LocalUser{
        let usr = localStorage.getItem(STORAGE_KEYS.locaUser);
        if(usr == null){
            return null;
        }
        else{
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.locaUser);
        }
        else{
            localStorage.setItem(STORAGE_KEYS.locaUser, JSON.stringify(obj));
        }
    }
}