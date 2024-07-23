import React, { useState } from 'react';

function MacroCalculator() {
    const [weight, setWeight] = useState('');
    const [workouts, setWorkouts] = useState('');
    const [calorieDeficit, setCalorieDeficit] = useState('');
    const [macros, setMacros] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform calculations
        const protein = weight * 1.2; // Example calculation
        const carbs = (weight * 0.8) + (workouts * 10); // Example calculation
        const fats = (weight * 0.3) - (calorieDeficit / 9); // Example calculation

        setMacros({ protein, carbs, fats });
    };

    return (
        <div>
            <h1>Macro Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Workouts per week:</label>
                    <input
                        type="number"
                        value={workouts}
                        onChange={(e) => setWorkouts(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Desired Calorie Deficit:</label>
                    <input
                        type="number"
                        value={calorieDeficit}
                        onChange={(e) => setCalorieDeficit(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate Macros</button>
            </form>
            {macros && (
                <div>
                    <h2>Your Macros</h2>
                    <p>Protein: {macros.protein}g</p>
                    <p>Carbs: {macros.carbs}g</p>
                    <p>Fats: {macros.fats}g</p>
                </div>
            )}
        </div>
    );
}

export default MacroCalculator;