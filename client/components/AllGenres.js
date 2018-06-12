import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

export class AllGenres extends React.Component {
  render() {

    const pictures = ['https://lawofattractionsolutions.com/wp-content/uploads/2016/04/action-clapboard.png',
    'http://im.hunt.in/cg/Nashik/City-Guide/Adventure-in-and-around-Nashik.jpg',
    'http://www.animation.cafe/assets/frontend/images/animation/animation_2.jpg',
    'http://www.filmsite.org/images/comedy-genre.jpg',
    'https://www.montgomerycountymd.gov/POL/Resources/Images/Crime-Stats-300x300.jpg',
    'https://www.videopro.com.au/images/solution/documentary-freelance.jpg',
    'https://wereadtoknow.files.wordpress.com/2011/10/drama-masks.jpg',
    'http://coolvibe.com/wp-content/uploads/2015/08/Fantasy-Art-Ruoxin-Zhang-Isa.jpg',
    'http://www.hifilmfest.com/wp-content/uploads/2015/05/noir-1.jpeg',
    'https://pbs.twimg.com/profile_images/546125951034482688/5P4ZJhtT_400x400.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYp_5FFf2OiOas_qPj6jLS5ybaaaCOOJmhAUrqTeKJAgc3kqT',
    'http://www.squishable.com/mm5/graphics/00000001/mystery.jpg',
    'https://www.harlequin.com/store/20160115001/images/onlinereads/1710_hp_OR2.jpg',
    'https://cdn-images-1.medium.com/max/1200/1*uR8XP-TsnIXlsbjmWRESWg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKn_YAPU07o_tcZZM7I-k1kTKajm8MKY1uMULGPkO-6F6Q3YndQ',
    'https://img00.deviantart.net/197b/i/2009/306/b/2/western_saloon_by_nikki_1986.jpg',
  ]


    let genreArr = [];
    this.props.books.map(book => {
      genreArr = genreArr.concat(book.genre);
    })

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    let unique = genreArr.filter(onlyUnique).sort()

    return (
      <div className="allGenres">
        {unique.map((genre, index) =>
          <div className="each-genre" key={genre}>
            <Link to={`/genres/${genre}`} className='genre-names'>
            <img src={pictures[index]}
           className='genre-images'/>
            <div className="genre-name">{genre}</div>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  books: state.books
});

export default connect(mapState, null)(AllGenres);
