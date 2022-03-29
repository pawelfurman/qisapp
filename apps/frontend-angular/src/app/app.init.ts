import { UserAuth } from './features/auth/store/auth.feature';
import { loginOnInit } from './features/auth/store/auth.actions';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { LocalStorageService } from './features/auth/utils/local-storage.service';



export function initializeApp(router: Router, store: Store, ls: LocalStorageService): () => Promise<void> {
    return () => new Promise((resolve, reject) => {

        const user:UserAuth = JSON.parse(ls.getItem('user') || '{}')

        if(user?.token?.length){
            store.dispatch(loginOnInit({...user}))
        }else{
            router.navigate(['/', 'login'])
        }

        resolve();
    })
}