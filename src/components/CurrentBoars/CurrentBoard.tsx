import React from 'react';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { setListsList } from '../../store/lists';
import { setCardsList } from '../../store/cards';
import styles from './CurrentBoard.module.scss';
import { CurrentCards } from '../CurrentCards';

interface BoardProps {
    boardId: string;
    boards: Record<string, any>[];
    lists: Record<string, any>[];
    cards: Record<string, any>[];
    isLoadingLists: boolean;
    onGetLists: () => void;
    onGetCards: () => void;
}

class CurrentBoard extends React.Component<BoardProps> {
    componentDidMount() {
        this.props.onGetLists();
        this.props.onGetCards();
    };

    private renderOneList() {
        return this.props.lists.map((list, i) => (
            <div key={i} className={styles.one_list}>
                <div className={styles.listName}>{list.name}</div>
                <div><CurrentCards currentListId={list.id} cards={this.props.cards}></CurrentCards></div>
            </div>))
    };
    public render(boards: any = this.props.boards) {
        const findBoardById = boards.find(x => x.id === this.props.boardId);
        const inlineStyle = {
            backgroundImage: 'url(' + findBoardById.prefs.backgroundImage + ')',
            backgroundColor: findBoardById.prefs.backgroundColor
        }
        if (this.props.isLoadingLists) {
            return (<div>Data is loading...</div>)
        }
        return (
            <div className={styles.list} style={inlineStyle}>
                <div className={styles.div_list}>{this.renderOneList()}</div>
            </div>
        )
    }
}

const mapStateToProps = ({ boards, lists, cards }: AppState) => {
    return {
        boardId: boards.currentBoardId,
        boards: boards.boardsData,
        lists: lists.listOfLists,
        cards: cards.cardsData,
        isLoadingLists: lists.isLoadingLists,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetLists: () => dispatch(setListsList()),
        onGetCards: () => dispatch(setCardsList()),
    }
}

const ConnectedCurrentBoard = connect(mapStateToProps, mapDispatchToProps)(CurrentBoard)
export { ConnectedCurrentBoard as CurrentBoard }