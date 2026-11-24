import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

export interface SongSection {
  label: string;
  lines: string[];
}

export interface Song {
  id: number;
  tabLabel: string;
  title: string;
  artist: string;
  sections: SongSection[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  activeSongIndex = signal<number>(0);
  fontSize = signal<number>(18);

  songs = signal<Song[]>([
    {
      id: 1,
      tabLabel: 'Proveedor',
      title: 'Proveedor',
      artist: 'Raisa Diaz',
      sections: [
        {
          label: 'Verse',
          lines: [
            'Eres Jireh, eres mi proveedor',
            'No temeré',
            'Eres mi buen pastor',
            'A Ti no se Te escapa nada de mí',
            'Conoces bien mi necesidad y a Tu tiempo sé que tú me suplirás'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            'No condicionaré mi adoración a mi situación',
            'Te adoro por quién eres, Te adoro por quién eres',
            'No es por la bendición, mi adoración no es por lo que ofreces',
            'Es que yo sé quién eres',
            'Te adoro por quién eres'
          ]
        },
        {
          label: 'Verse',
          lines: [
            'Eres Jireh, eres mi proveedor',
            'No temeré',
            'Eres mi buen pastor',
            'A Ti no se Te escapa nada de mí',
            'Conoces bien mi necesidad y a Tu tiempo sé que tú me suplirás'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            'No condicionaré mi adoración a mi situación',
            'Te adoro por quién eres, Te adoro por quién eres',
            'No es por la bendición, no es por lo que ofreces',
            'Es que yo sé quién eres',
            'Te adoro por quién eres'
          ]
        },
        {
          label: 'Refrain',
          lines: [
            'No son los panes, no son los peces',
            'Yo sé quién eres, yo sé quién eres, yo sé quién eres, yo sé quién eres',
            'No son los panes, no son los peces',
            'Yo sé quién eres, yo sé quién eres, yo sé quién eres, yo sé quién eres'
          ]
        },
        {
          label: 'Refrain 2',
          lines: [
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            'No condicionaré mi adoración a mi situación',
            'Te adoro por quién eres, Te adoro por quién eres',
            'No es por la bendición, mi adoración no es por lo que ofreces',
            'Es que yo sé quién eres, Te adoro por quién eres'
          ]
        },
        {
          label: 'Refrain',
          lines: [
            'No son los panes, no son los peces',
            'Yo sé quién eres, yo sé quién eres, yo sé quién eres, yo sé quién eres',
            'No son los panes, no son los peces',
            'Yo sé quién eres, yo sé quién eres, yo sé quién eres, yo sé quién eres'
          ]
        },
        {
          label: 'Bridge',
          lines: [
            'Y aunque la higuera no florezca y aunque falte el producto del olivo',
            'Yo me alegraré en él, yo me alegraré en él',
            'Aunque me falte todo, yo me voy a alegrar',
            'Aunque no tenga nada en mi casa, yo me voy a alegrar, amén, aleluya',
            'Yo me voy a alegrar y voy a confiar en aquel que me dio la promesa',
            'Y aunque la higuera no florezca y falte el producto del olivo',
            'Yo me alegraré, yo me alegraré',
            'Y aunque la higuera no florezca y falte el producto del olivo',
            'Yo me alegraré, yo me alegraré',
            'Y aunque la higuera no florezca y falte el producto del olivo',
            'Yo me alegraré, yo me alegraré',
            'Y aunque la higuera no florezca y falte el producto del olivo, yo le adoraré, yo le adoraré'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Yo no necesito nada cuando estoy con él, porque él lo llena todo',
            'No necesito nada más, Dios lo llena todo',
            'Yo no necesito nada cuando estoy con él, porque él lo llena todo',
            'No necesito nada más, Dios lo llena todo',
            'No necesito nada más, Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo',
            'No necesito nada más, no necesito nada más, no necesito nada más',
            'Tu nombre lo dice todo'
          ]
        }
      ]
    },
    {
      id: 2,
      tabLabel: 'Sure Been Good',
      title: 'Sure Been Good',
      artist: 'Elevation Worship',
      sections: [
        {
          label: 'VERSE 1',
          lines: [
            'You’ve been better to me than I could',
            'Ever have hoped You would be',
            'You took the mess that I was and You have',
            'Done some incredible things',
            '',
            'You’ve been better to me than I could',
            'Ever have hoped You would be',
            'You took the mess that I was and You have',
            'Done some incredible things'
          ]
        },
        {
          label: 'VERSO 2',
          lines: [
            'You always knew there was a better me',
            'But You loved me like I was',
            'Filling up the spaces in between',
            'You’ve always been enough'
          ]
        },
        {
          label: 'PRE-CORO',
          lines: [
            'Nobody else as good',
            'Nobody else as kind',
            'Nobody else would lay their life down',
            'On the line',
            'Nobody else could do it',
            'Even if they tried',
            'Nobody else could come and save me',
            'Every time'
          ]
        },
        {
          label: 'CORO (1X)',
          lines: [
            'You’ve been just that good, You’re good to me',
            'You’ve been just that good, so good to me',
            'Lord without, Your love where would I be',
            'Oh my God You’ve sure been good to me'
          ]
        },
        {
          label: 'VERSE 3',
          lines: [
            'Me has dado una vida nueva',
            'Mejor de lo que soñé',
            'Tú estás obrando más de',
            'Lo que yo imaginé',
            'Me has dado una vida nueva',
            'Mejor de lo que soñé',
            'Tú estás obrando más de',
            'Lo que yo imaginé'
          ]
        },
        {
          label: 'VERSO 4',
          lines: [
            'Sabías que había más en mí',
            'Pero me amaste igual',
            'Lo que necesito está en ti',
            'Tú me bastarás'
          ]
        },
        {
          label: 'PRE-CORO',
          lines: [
            'No hay nadie como tú',
            'Tan lleno de bondad',
            'Nadie más se entregaría en mi lugar',
            'No hay nadie que pudiera',
            'Siquiera intentar',
            'Nadie podría rescatarme otra vez más'
          ]
        },
        {
          label: 'CORO',
          lines: [
            'Tú has sido tan, tan bueno Dios',
            'Tú has sido tan, tan bueno Dios',
            'No puedo vivir sin tu amor',
            'Tú has sido tan tan bueno Dios'
          ]
        },
        {
          label: 'INTERLUDE / BRIDGE 1',
          lines: [
            'Mi pecado Él borró',
            'Y yo nunca voy a olvidarlo',
            'Su amigo me llamó',
            'Y yo nunca voy a olvidarlo',
            'Y le alabo porque sé',
            'Nueva vida encontré',
            'Jesús mi alma rescató',
            'Y yo nunca voy a olvidarlo'
          ]
        },
        {
          label: 'Bridge 2',
          lines: [
            'You didn’t have to take my shame',
            'But You did',
            'And I won’t forget it',
            'You didn’t have to call my name',
            'But You did',
            'And I won’t forget it',
            'And I’m praising You because',
            'You didn’t leave me like I was',
            'You didn’t have to save my soul',
            'But You did',
            'And I won’t forget it'
          ]
        },
        {
          label: 'Bridge 3',
          lines: [
            'You didn’t have to die for me',
            'But You did',
            'And I won’t forget it',
            'You didn’t have to set me free',
            'But You did',
            'And I won’t forget it',
            'And I’m praising You because',
            'You didn’t leave me like I was',
            'You didn’t have to save my soul',
            'But You did',
            'And I won’t forget it'
          ]
        },
        {
          label: 'Bridge 4',
          lines: [
            'And I’m praising You because',
            'You didn’t leave me like I was',
            'And I’m praising You because',
            'You didn’t leave me like I was',
            'And I’m praising You because',
            'You didn’t leave me like I was',
            'And I’m praising You because',
            'You didn’t leave me like I was'
          ]
        },
        {
          label: 'Chorus 2',
          lines: [
            'You’ve been just',
            'That good You’re good to me',
            'You’ve been just',
            'That good so good to me',
            'Lord without Your love where would I be'
          ]
        },
        {
          label: 'Tag',
          lines: [
            'Lord without Your love where would I be',
            'Lord without Your love where would I be'
          ]
        },
        {
          label: 'Refrain',
          lines: [
            'Oh my God You’ve sure been good to me'
          ]
        },
        {
          label: 'ENDING',
          lines: [
            'You always knew there was a better me',
            'But You loved me like I was',
            'Filling up the spaces in between'
          ]
        }
      ]
    },
    {
      id: 3,
      tabLabel: 'Purifica',
      title: 'Purifica',
      artist: 'World Worship',
      sections: [
        {
          label: 'Verso',
          lines: [
            'Ten misericordia de mí, oh, Dios',
            'Con inagotable amor y tu gran compasión',
            'Borra las manchas de mi pasado',
            'Lávame de toda culpa, llévate todo pecado'
          ]
        },
        {
          label: 'Pre-coro',
          lines: [
            'Como el siervo brama por las corrientes de aguas',
            'Esta generación por tu gloria clama'
          ]
        },
        {
          label: 'Coro',
          lines: [
            'Como río fluye en mi interior',
            'Purifícame, ven y límpiame',
            'Como río fluye en mi interior',
            'Purifícame, ven y límpiame'
          ]
        },
        {
          label: 'Verso',
          lines: [
            'Ten misericordia de mí, oh, Dios',
            'Con inagotable amor y tu gran compasión',
            'Borra las manchas de mi pasado',
            'Lávame de toda culpa, llévate todo pecado'
          ]
        },
        {
          label: 'Pre-coro',
          lines: [
            'Como el siervo brama por las corrientes de aguas',
            'Esta generación por tu gloria clama'
          ]
        },
        {
          label: 'Coro',
          lines: [
            'Como río fluye en mi interior',
            'Purifícame, ven y límpiame',
            'Como río fluye en mi interior',
            'Purifícame, ven y límpiame'
          ]
        },
        {
          label: 'Bridge',
          lines: [
            'Purifica, limpia, sana',
            'Purifica, limpia, sana',
            'Purifica, limpia, sana',
            'Ven, ven, ven'
          ]
        }
      ]
    },
    {
      id: 4,
      tabLabel: 'Nothing Else',
      title: 'Nothing Else',
      artist: 'Cody Carnes, Jessie Early, and Hank Bentley',
      sections: [
        {
          label: 'Intro / Chorus',
          lines: [
            "I'm caught up in Your presence",
            'I just want to sit here at Your feet',
            "I'm caught up in this holy moment",
            'I never want to leave',
            "Oh, I'm not here for blessings",
            "Jesus, You don't owe me anything",
            'More than anything that You can do',
            'I just want You'
          ]
        },
        {
          label: 'Verse 1',
          lines: [
            "I'm sorry when I've just gone through the motions",
            "I'm sorry when I just sang another song",
            'Take me back to where we started',
            'I open up my heart to You'
          ]
        },
        {
          label: 'Verse 2',
          lines: [
            "I'm sorry when I've come with my agenda",
            "I'm sorry when I forgot that You're enough",
            'Take me back to where we started',
            'I open up my heart to You'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            "I'm caught up in Your presence",
            'I just want to sit here at Your feet',
            "I'm caught up in this holy moment",
            'I never want to leave',
            "Oh, I'm not here for blessings",
            "Jesus, You don't owe me anything",
            'More than anything that You can do',
            'I just want You'
          ]
        },
        {
          label: 'Bridge X3',
          lines: [
            'I just want You',
            'Nothing else, nothing else',
            'Nothing else will do',
            'I just want You',
            'Nothing else, nothing else',
            'Nothing else will do'
          ]
        }
      ]
    }, {
      id: 5,
      tabLabel: 'Un Hogar Sin Ti',
      title: 'Un Hogar Sin Ti',
      artist: 'Grupo Grace & Emanuel Deliser',
      sections: [
        {
          label: 'Verse 1',
          lines: [
            'Si encuentras desorden',
            'En mi corazón',
            'Tú puedes hacer',
            'Lo que sientas mejor',
            'Cambiar los colores',
            'O los muebles que hay',
            'Moverlos de lugar',
            'Hacia otro lugar'
          ]
        },
        {
          label: 'Verse 2',
          lines: [
            'Abrir las ventanas',
            'Y que entre la luz',
            'Y que otros puedan ver',
            'Que aqui vives solo tu',
            'Que tu eres dueño',
            'Y que siempre seras',
            'Decirlo no está demás',
            'Nunca va a estar demás'
          ]
        },
        {
          label: 'Chorus',
          lines: [
            'Podemos plantar las flores',
            'Crear un jardín',
            'Comer de tus frutos',
            'Correr por ahí',
            'Tener conversaciones',
            'Que nunca tengan fin',
            'Y que se traten de ti',
            'Y no tanto de mí'
          ]
        },
        {
          label: 'Bridge',
          lines: [
            'Disfruto estar en tus brazos',
            'Yo me deleito en ti',
            'Prometo ser cuidadoso',
            'Con lo que entra en mí',
            'Y ahora entiendo',
            'Que no existe un hogar sin ti'
          ]
        }
      ]
    }
  ]);
  
  currentSong = computed(() => this.songs()[this.activeSongIndex()]);

  selectSong(index: number) {
    this.activeSongIndex.set(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  adjustFontSize(delta: number) {
    this.fontSize.update(size => Math.min(28, Math.max(14, size + delta)));
  }
}
