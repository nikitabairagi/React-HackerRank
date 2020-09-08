import React from 'react';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[],
            totalPages : 0
        };
    }
    getTitles(pageNumber){
        fetch("https://jsonmock.hackerrank.com/api/articles?page=" + pageNumber)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    articles: response.data,
                    totalPages: response.total_pages,
                });
            });
    }
    componentDidMount() {
        this.getTitles(1);
    }

    render() {
        let pages = [];
        for(let i=1; i<=this.state.totalPages; i++){
            pages.push(<button
                onClick={() => this.getTitles(i)}
                data-testid="page-button" key={i}>{i}</button>);
        }
        return (
      <React.Fragment>
        <div className="pagination">
            {pages}
        </div>
        <ul className="results">
            {this.state.articles.map((article,index) =>
                article.title &&
                <li key={index} data-testid="result-row">{article.title}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
